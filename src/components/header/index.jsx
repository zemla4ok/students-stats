import { AppBar, Button, Toolbar } from '@mui/material';

const Header = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div className="header-component">
      <AppBar position="static">
        <Toolbar>
          {
            tabs.map(tab => {
              const variant = selectedTab === tab.value ? 'outlined' : '';
              return (
                <Button color="inherit"
                        variant={variant}
                        onClick={() => setSelectedTab(tab.value)}>
                  {tab.title}
                </Button>
              )
            })
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header
