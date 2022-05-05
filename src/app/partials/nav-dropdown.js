import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const DropdownTriggerExample = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const options = [
  //   {
  //     key: 'user',
  //     text: (
  //       <span>
  //         Signed in as <strong>Bido</strong>
  //       </span>
  //     ),
  //     disabled: true,
  //   },
  //   { key: 'coins', text: 'Your wallet' },
  //   { key: 'email-support', text: 'E-mail Support' },
  //   { key: 'faq', text: 'FAQs' },
  //   { key: 'settings', text: 'Settings' },
  //   { key: 'Log-out', text: 'Log Out'},
  // ]

  return (
    <div className="d-menu">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        @bido
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My Coins</MenuItem>
        <MenuItem onClick={() => {
          props.onLogout();
          handleClose();
        }}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownTriggerExample;
