import React, { useState, useEffect } from 'react';
import '../App.css';
import { RevealDashboardThumbnail } from './RevealDashboardThumbnail'
import { CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import { useLoading, Oval } from '@agney/react-loading';
import { backend } from '../backend/Backend';

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1920,
  minPadding: 100
});

function DashboardsRepository(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dashboards, setDashboards] = useState([]);

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
    }
    let ignored = false;
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
    return () => ignored = true;
  }, [])

  const loadDashboards = (onSuccess, onError) => {
    backend.dashboards(onSuccess, onError);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <section {...containerProps} className="Loading-indicator">{indicatorEl}</section>
  } else {
    return (
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
            readOnly={true}/>
          </div>)}
      </Grid>
    );
  }
}

export default DashboardsRepository;
