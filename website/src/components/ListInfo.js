import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { DeleteButton, EditButton } from "./Buttons.js";
import PropTypes from "prop-types";

const ListInfo = props => {
  const { edit, list, missing, remove, title, to } = props;

  return (
    <div>
      {list.length ? (
        <List>
          <ListItem divider>
            <ListItemText primary={title} />
          </ListItem>
          {list.map((item, i) => {
            return (
              <ListItem button key={i}>
                <Link to={to}>
                  <ListItemText primary={item.name} />
                </Link>
                <ListItemSecondaryAction>
                  <EditButton
                    onClick={() => edit(item)}
                    style={{ outline: "none" }}
                  />
                  <DeleteButton
                    onClick={() => remove(item)}
                    style={{ outline: "none" }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p
          style={{
            top: "50%",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)"
          }}
        >
          {missing}
        </p>
      )}
    </div>
  );
};

ListInfo.propTypes = {
  edit: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  missing: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.object.isRequired
};

export default ListInfo;