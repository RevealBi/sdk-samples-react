import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { RevealDashboardThumbnail } from './RevealDashboardThumbnail'
import { CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import { useLoading, Oval } from '@agney/react-loading';
import { backend } from '../backend/Backend';
import plusicon from '../images/plus-icon.svg';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1920,
  minPadding: 100
});

function DashboardsRepository(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dashboards, setDashboards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const selectedDashboard = useRef(null);
  const [dirty, setDirty] = useState(true);
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval/>
  });

  useEffect(() => {
    let ignored = false;
    const reloadFinished = (result, error) => {
      if (ignored) {
        return;
      }
      setIsLoaded(true);
      if (result) {
        setDashboards(result);
      } else if (error) {
        setError(error);
      }
      setDirty(false);
    }
    if (dirty) {
      loadDashboards((result) => {
        reloadFinished(result, null);
      },
      (error) => {
        reloadFinished(null, error);
      });
      }
    return () => ignored = true;
  }, [dirty])
  
  const reload = () => {
    setDirty(true);
  }
  const loadDashboards = (onSuccess, onError) => {
    backend.dashboards(onSuccess, onError);
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <section {...containerProps} className="Loading-indicator">{indicatorEl}</section>
  } else {
    return (
      <>
      <header className="Repository-Header" hidden={props.readOnly}>
          { !props.readOnly &&
            <OverlayTrigger placement="bottom" overlay={<Tooltip>New Dashboard</Tooltip>}>
              <Link id="newdashboard_link" to="/dashboard/newdashboard" className="Repository-Header-NewDashboard-Link"><img alt="New Dashboard" src={plusicon}/></Link>
            </OverlayTrigger>
          }
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
            readOnly={false}/>
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
