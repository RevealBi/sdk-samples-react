import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { RevealDashboardThumbnail } from './RevealDashboardThumbnail'
import { CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import { useLoading, Oval } from '@agney/react-loading';
import { Modal, Button } from 'react-bootstrap'
import { backend } from '../backend/Backend';
import uploadicon from '../images/upload-icon.svg';
import plusicon from '../images/plus-icon.svg';
import { Link } from 'react-router-dom';

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1920,
  minPadding: 100
});

function DashboardsRepository(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dashboards, setDashboards] = useState([]);
  const [dirty, setDirty] = useState(true);

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
    return (
      <>
      <input type="file" ref={fileInput} onChange={handleFileInput} style={{display:'none'}} accept=".rdash" multiple={true}/>
      <header className="Repository-Header">
          { !props.readOnly && <Link id="newdashboard_link" to="/newdashboard" className="Repository-Header-NewDashboard-Link"><img alt="New Dashboard" src={plusicon}/></Link>}
          { !props.readOnly && <button id="uploaddashboard_link" onClick={uploadDashboard} className="Repository-Header-UploadDashboard-Link"><img alt="Upload Dashboard" src={uploadicon}/></button>}
      </header>
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
