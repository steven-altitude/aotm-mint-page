
import { AppBar, IconButton, makeStyles } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Logo from "../img/aotm-logo.png";
import LogoDiscord from "../img/Discord.png";
import LogoTwitter from "../img/twitter-black.png";

const useStyles = makeStyles(theme => ({
    offset : theme.mixins.toolbar,
    title:{
        flexGrow: 1
    }
}))



const Navbar = () => {
    const classes = useStyles()

    return(
        <div>
            <AppBar style={{ background: '#FFFFFF' }}>
                <Toolbar>
                    <IconButton aria-label="menu"  className={classes.title}>
                        <img src={Logo} alt="Logo"/>
                    </IconButton>
                    <IconButton aria-label="discord" >
                        <img src={LogoDiscord} alt="Discord" onClick={() => window.open('https://discord.gg/PNw7MegU', '_blank')} />
                    </IconButton>
                    <IconButton aria-label="twitter" >
                        <img src={LogoTwitter} alt="Twitter" onClick={() => window.open('https://twitter.com/metaverseangels', '_blank')}/>
                    </IconButton>

                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar