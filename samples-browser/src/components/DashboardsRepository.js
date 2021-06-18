import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { RevealDashboardThumbnail } from './RevealDashboardThumbnail'
import { CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import { useLoading, Oval } from '@agney/react-loading';
import { Modal, Button, OverlayTrigger, Tooltip, ListGroup } from 'react-bootstrap'
import { backend } from '../backend/Backend';
import uploadicon from '../images/upload-icon.svg';
import plusicon from '../images/plus-icon.svg';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../Constants';

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1920,
  minPadding: 100
});

function DashboardsRepository(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dashboards, setDashboards] = useState([]);
  const [dirty, setDirty] = useState(true);
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const selectedDashboard = useRef(null);

  const fileInput = useRef(null);

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval/>
  });

  useEffect(() => {
    const reloadFinished = (result, error) => {
      setIsLoaded(true);
      if (result) {
        setDashboards(result);
      } else if (error) {
        setError(error);
      }
      setDirty(false);
    }
    let ignored = false;
    if (dirty) {
      loadDashboards((result) => {
        if (!ignored) {
          reloadFinished(result, null);
        }
      },
      (error) => {
        if (!ignored) {
          reloadFinished(null, error);
        }
      });
    }
    return () => ignored = true;
  }, [dirty])

  const loadDashboards = (onSuccess, onError) => {
    backend.dashboards(onSuccess, onError);
  }

  const reload = () => {
    setDirty(true);
  }

  const handleCloseModal = (yesOption) => {
    if (yesOption) {
      deleteDashboard(selectedDashboard.current);
    }
    setShowModal(false);
    selectedDashboard.current = null;
  }

  const confirmDeleteDashboard = (dashboard) => {
    selectedDashboard.current = dashboard;
    setShowModal(true);
  }

  const exportDashboard = (dashboardId) => {
    backend.exportDashboard(dashboardId);
  }

  const deleteDashboard = (dashboard) => {
    backend.deleteDashboard(
      dashboard.id, 
      () => {
        reload();
      }, 
      (error) => {
        alert('delete failed: ' + error)
      });
  }

  const uploadDashboard = () => {
    fileInput.current.click();
  }

  const handleFileInput = (e) => {
      const formData = new FormData();
      const files = e.target.files;
      for (var i = 0; i < files.length; i++) {
        const file = files[i];
        formData.append("files", file, file.name);
      }
      backend.uploadDashboards(formData, () => {
        reload();
      });
      fileInput.current.value = null;//to avoid an issue when uploading again the same file, it's ignored
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <section {...containerProps} className="Loading-indicator">{indicatorEl}</section>
  } else {
    var tags = ["Finance", "Marketing", "Operations", "HR", "Healthcare", "Manufacturing"];
    var tagsPath = config.frontendPath + '/tags/';
    return (
      <>
      <input type="file" ref={fileInput} onChange={handleFileInput} style={{display:'none'}} accept=".rdash" multiple={true}/>
      <header className="Repository-Header" hidden={props.readOnly}>
          { !props.readOnly && 
            <OverlayTrigger placement="bottom" overlay={<Tooltip>New Dashboard</Tooltip>}>
              <Link id="newdashboard_link" to="/newdashboard" className="Repository-Header-NewDashboard-Link"><img alt="New Dashboard" src={plusicon}/></Link>
            </OverlayTrigger>
          }
          { !props.readOnly && 
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Upload Dashboard</Tooltip>}>
            <button id="uploaddashboard_link" onClick={uploadDashboard} className="Repository-Header-UploadDashboard-Link"><img alt="Upload Dashboard" src={uploadicon}/></button>
          </OverlayTrigger>
          }
      </header>
      <div class="Repository-Container">
        <ListGroup className="Tags-List" activeKey={location.pathname === '/' ? (tagsPath + tags[0].toLowerCase()) : (config.frontendPath + location.pathname)}>
          {tags.map((t, i) => 
            <ListGroup.Item action href={tagsPath + t.toLowerCase()}>
            {t}
            </ListGroup.Item>
          )}
        </ListGroup>
        <Grid component="div" 
            columnWidth={350}
            itemHeight={270}
            gutterWidth={5}
            gutterHeight={5}
            layout={layout.simple}
            duration={800}
            easing="ease-out"
            enter={() => ({ scale: 1, opacity: 0 })}
            entered={() => ({ scale: 1, opacity: 1 })}>
          {dashboards.map((d, i) => 
            <div key={d.id}>
              <RevealDashboardThumbnail title={d.info.Title} id={d.id} summary={d.info} 
              onOpenDashboard={() => {
                props.onOpenDashboard(d.id);
              }} 
              onExportDashboard={() => {
                exportDashboard(d.id);
              }}
              onDeleteDashboard={() => {
                confirmDeleteDashboard(d);
              }}
              readOnly={props.readOnly}/>
            </div>)}
        </Grid>
      </div>

      <Modal show={showModal} onHide={() => handleCloseModal(false)} animation={false} centered="true" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete dashboard {selectedDashboard.current == null ? null : selectedDashboard.current.info.Title}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal(true)}>Yes</Button>
          <Button variant="primary" onClick={() => handleCloseModal(false)}>No</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}

export default DashboardsRepository;
