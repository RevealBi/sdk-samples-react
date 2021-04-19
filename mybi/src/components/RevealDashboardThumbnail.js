import React, { useEffect } from 'react';
import crossicon from '../images/cross-icon.svg';

const $ = window.$;


export function RevealDashboardThumbnail(props) {
  const escapeId = (str) => {
    return str.replaceAll(' ', '_');
  }
  const escapedId = escapeId(props.id);
  const divId = "thumbnail_" + escapedId;
  const escapedTitle = escapeId(props.title);
  useEffect(() => {
    var thumbnailView = new $.ig.RevealDashboardThumbnailView("#" + divId);
    thumbnailView.dashboardInfo = props.summary;
  }, [props.summary, divId]);

  return (
    <button className="Reveal-Thumbnail-Box" onClick={props.onOpenDashboard} id={"Reveal-Thumbnail-Box-" + escapedTitle}>
        <div className="Reveal-Thumbnail-Header">{props.title}</div>
        <div className="Reveal-Dashboard-Delete-Button" id={"Reveal-Thumbnail-Delete-" + escapedTitle}
        onClick={(e) => 
        {
            if (props.onDeleteDashboard) {
                props.onDeleteDashboard();
            }
            e.stopPropagation();
        }
        }><img src={crossicon} alt="Delete Dashboard" className="delete-icon"/></div>
        <div id={divId} className="Reveal-Thumbnail-View"/>
    </button>
  );
}