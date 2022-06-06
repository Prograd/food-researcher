import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button, Link } from "@material-ui/core"
import './style.css';
import { Link as RouterLink } from "react-router-dom";

const headersData = [
    {
        label: "Dodaj lokal",
        href: "/addRestaurant",
      },
      {
        label: "Edytuj lokal",
        href: "/editRestaurant",
      }
    ];

    const useStyles = makeStyles(() => ({
        header: {
          backgroundColor: "#1890ff",
          paddingRight: "79px",
          paddingLeft: "118px",
        },
        logo: {
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 600,
          color: "#FFFEFE",
          textAlign: "left",
        },
        menuButton: {
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 700,
            size: "18px",
            marginLeft: "38px",
        },
        toolbar: {
            display: "flex",
            justifyContent: "space-between",
            marginRight:"50px"
         },
        }));

export const Header = () => {
   const { header, logo, menuButton, toolbar } = useStyles();

    const foodResearcherLogo = (
        <Typography variant="h5" component="h1" className={logo}>
            <Link href="/" underline="none" color="inherit">FOOD RESEARCHER</Link>
        </Typography>
    ) 
    
    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton
              }}
            >
              {label}
            </Button>
          );
        });
      };

    return( 
        <header>
            <AppBar className={header}>
                <Toolbar className={toolbar}>
                    {foodResearcherLogo}
                    <div>{getMenuButtons()}</div></Toolbar>
            </AppBar>
        </header> 
    );
}