import React, { Component } from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class ImageResults extends Component {
  render() {
    const images =
      this.props.images.length > 0 ? (
        <GridList cols={3}>
          {this.props.images.map(img => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton>
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt={img.tag} />
            </GridTile>
          ))}
        </GridList>
      ) : null;
    return <div>{images}</div>;
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};
export default ImageResults;
