import React, { useEffect } from 'react';
import crossicon from '../images/cross-icon.svg';

const $ = window.$;

export function RevealDashboardThumbnail(props) {
  useEffect(() => {
    var thumbnailView = new $.ig.RevealDashboardThumbnailView("#thumbnail_" + props.id);
    thumbnailView.dashboardInfo = props.summary;
  });

  return (
    <button className="Reveal-Thumbnail-Box" onClick={props.onOpenDashboard} id={"Reveal-Thumbnail-Box-" + props.title}>
        <div className="Reveal-Thumbnail-Header">{props.title}</div>
        <div className="Reveal-Dashboard-Delete-Button" id={"Reveal-Thumbnail-Delete-" + props.title}
        onClick={(e) => 
        {
            if (props.onDeleteDashboard) {
                props.onDeleteDashboard();
            }
            e.stopPropagation();
        }
        }><img src={crossicon} alt="Delete Dashboard" className="delete-icon"/></div>
        <div id={"thumbnail_"+props.id} className="Reveal-Thumbnail-View"/>
    </button>
  );
}