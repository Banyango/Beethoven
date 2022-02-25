import {Meta, Story} from '@storybook/react';
import Container from "../lib/container/container";
import {NavbarLink} from "../lib/navbar/navbar-link/navbar-link";
import Navbar from "../lib/navbar/navbar";
import Breadcrumbs from "../lib/breadcrumbs/breadcrumbs";
import Divider from "../lib/divider/divider";

const bread = [{
  href: '#',
  label: 'Home',
}, {
  href: '#',
  label: 'Docs',
}];

export const ExamplePage: Story = () => {
  return (
    <>
      <Navbar name="Beethoven" url="#" icon="bi-music-note-beamed">
        <NavbarLink text="Docs" url="/docs" active/>
        <NavbarLink text="Github" url="/github"/>
      </Navbar>
        <Breadcrumbs crumbs={bread} />
        <Container>
          <h1>Example Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tempor consectetur, nisi nunc
            fermentum nisi, eu aliquet nunc nisi eu nisl.
          </p>
          <Divider/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tempor consectetur, nisi nunc
            fermentum nisi, eu aliquet nunc nisi eu nisl.
          </p>
        </Container>
      <div style={{ width: '100%', backgroundColor:'#fff', marginBottom:'60px'}}>
        <Divider/>
        <div style={{display:"flex", alignContent:'center', justifyContent:"space-around"}}>
          <div>
            © 2022 Beethoven, Inc
          </div>
          <i className="bi-music-note-beamed" style={{fontSize:"20px"}}/>
          <div >
            <ul style={{display:"flex", maxWidth: "300px", flexWrap:"wrap"}}>
              <li style={{marginRight:"5px"}}>Home</li>
              <li style={{marginRight:"5px"}}>Feature</li>
              <li style={{marginRight:"5px"}}>FAQ</li>
              <li style={{marginRight:"5px"}}>Careers</li>
              <li style={{marginRight:"5px"}}>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};

export default {
  component: ExamplePage,
  title: 'Example Page',
} as Meta;
