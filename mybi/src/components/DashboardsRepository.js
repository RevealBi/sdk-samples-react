import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { RevealDashboardThumbnail } from './RevealDashboardThumbnail'
import { config } from '../Constants';
import { CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import { useLoading, Oval } from '@agney/react-loading';
import { Modal, Button } from 'react-bootstrap'

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1920,
  minPadding: 100
});

export function DashboardsRepository(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dashboards, setDashboards] = useState([]);
  const [loadNumber, setLoadNumber] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const selectedDashboard = useRef(null);

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval/>
  });

  useEffect(() => {
    let ignored = false;
    loadDashboards((result) => {
      if (!ignored) {
        setIsLoaded(true);
        setDashboards(result);
        }
    },
    (error) => {
      if (!ignored) {
        setIsLoaded(true);
        setError(error);
      }
    });
    return () => ignored = true;
  }, [loadNumber])

  const loadDashboards = (onSuccess, onError) => {
    fetch(config.url.API_URL_DASHBOARDS)
      .then(res => res.json())
      .then(onSuccess, onError)
  }

  const reload = () => {
    setLoadNumber(loadNumber + 1);
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

  const deleteDashboard = (dashboard) => {
    //alert('TODO: delete dashboard ' + dashboard.info.Title);
    fetch(config.url.API_URL_DASHBOARDS + "/" + dashboard.id, {method: 'delete'})
    .then(
      (result) => {
        reload();
        //setDashboards(dashboards.filter((d) => d.id != dashboard.id));
      },
      (error) => {
        alert('delete failed: ' + error)
      }
    )
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <section {...containerProps} className="Loading-indicator">{indicatorEl}</section>
  } else {
    return (
      <>
      <Grid component="div" 
          columnWidth={350}
          itemHeight={270}
          gutterWidth={5}
          gutterHeight={5}
          layout={layout.simple}
          duration={800}
          easing="ease-out">
        {dashboards.map((d, i) => 
          <div key={d.id}>
            <RevealDashboardThumbnail title={d.id} id={i} summary={d.info} onOpenDashboard={() => {
              props.onOpenDashboard(d.id);
            }} onDeleteDashboard={() => {
              confirmDeleteDashboard(d);
            }}/>
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
