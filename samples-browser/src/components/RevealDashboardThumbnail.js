import React, { useEffect } from 'react';
import crossicon from '../images/cross-icon.svg';
import downloadicon from '../images/download-icon.svg';
const RevealApi = window.RevealApi;


export function RevealDashboardThumbnail(props) {
  const escapeId = (str) => {
    return str.replaceAll(' ', '_').replaceAll('.', '_');
  }
  const escapedId = escapeId(props.id);
  const divId = "thumbnail_" + escapedId;
  const escapedTitle = escapeId(props.title);
  useEffect(() => {
    var thumbnailView = new RevealApi.RevealDashboardThumbnailView("#" + divId);
    thumbnailView.dashboardInfo = props.summary;
  }, [props.summary, divId]);

  return (
    <button className="Reveal-Thumbnail-Box" onClick={props.onOpenDashboard} id={"Reveal_Thumbnail_Box_" + escapedTitle}>
        <div className="Reveal-Thumbnail-Header">{props.title}</div>
        {!props.readOnly && <div className="Reveal-Dashboard-Thumbnail-Button" id={"Reveal_Thumbnail_Delete_" + escapedTitle}
        onClick={(e) => 
        {
            if (props.onDeleteDashboard) {
                props.onDeleteDashboard();
            }
            e.stopPropagation();
        }
        }><img src={crossicon} alt="Delete Dashboard" className="delete-icon"/></div>}
        {!props.readOnly && <div className="Reveal-Dashboard-Thumbnail-Button" id={"Reveal_Thumbnail_Export_" + escapedTitle}
        onClick={(e) => 
        {
            if (props.onExportDashboard) {
                props.onExportDashboard();
            }
            e.stopPropagation();
        }
        }><img src={downloadicon} alt="Export Dashboard" className="export-icon"/></div>}
        <div id={divId} className="Reveal-Thumbnail-View"/>
    </button>
  );
}