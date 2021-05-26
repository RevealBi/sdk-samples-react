import React, { useEffect } from 'react';
const RevealApi = window.RevealApi;


export function RevealDashboardThumbnail(props) {
  const escapeId = (str) => {
    return str.replaceAll(' ', '_').replaceAll('.', '_');
  }
  const escapedId = escapeId(props.id);
  const divId = "thumbnail_" + escapedId;
  useEffect(() => {
    var thumbnailView = new RevealApi.RevealDashboardThumbnailView("#" + divId);
    thumbnailView.dashboardInfo = props.summary;
  }, [props.summary, divId]);

  return (
    <button className="Reveal-Thumbnail-Box" onClick={props.onOpenDashboard}>
        <div className="Reveal-Thumbnail-Header">{props.title}</div>
        <div id={divId} className="Reveal-Thumbnail-View"/>
    </button>
  );
}