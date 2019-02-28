import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Header, Grid, Image, Button, Icon, Popup, Item } from 'semantic-ui-react';

const slideOne = {
  slideImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWsShP?ver=a404&q=90&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=213&s=2120&d=795&aim=true',
  slideHeader: 'Introducing Microsoft HoloLens 2',
  slideText: 'Mixed reality is ready for business',
  slideButtonTxt: 'EXPLORE HOLOLENS',
  headerStyle: {
    position: 'absolute',
    color:
        'white',
    top:
        '53%',
    left:
        '36%',
  },
  textStyle: {
    position: 'absolute',
    color:
        'white',
    top:
        '67%',
    left:
        '41.6%',
  },
  buttonStyle: {
    position: 'absolute',
    backgroundColor:
        'white',
    borderRadius:
        '0',
    top:
        '74%',
    left:
        '43%',
  },
};

const slideTwo = {
  slideImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2FZRD?ver=2327&q=90&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=202&s=2120&d=795&aim=true',
  slideHeader: 'New Surface Pro 6',
  slideText: 'Stand out from the ordinary',
  slideButtonTxt: 'Shop now',
  headerStyle: {
    position: 'absolute',
    color:
        'white',
    top:
        '28%',
    left:
        '10%',
  },
  textStyle: {
    position: 'absolute',
    color:
        'white',
    top:
        '45%',
    left:
        '10%',
  },
  buttonStyle: {
    position: 'absolute',
    backgroundColor:
        'white',
    borderRadius:
        '0',
    top:
        '55%',
    left:
        '10%',
  },

};

const slideThree = {
  slideImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW54P2?ver=3520&q=90&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=1&y=205&s=2116&d=793&aim=true',
  slideHeader: 'Xbox One S',
  slideText: 'The best value in games and entertainment, with built-in 4K Ultra HD Blue-ray and 4K video streaming',
  slideButtonTxt: 'Shop now',
  headerStyle: {
    position: 'absolute',
    top: '28%',
    left: '8%',
  },
  textStyle: {
    position: 'absolute',
    textAlign: 'left',
    top: '45%',
    left: '8%',
    width: '35%',
  },
  buttonStyle: {
    position: 'absolute',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0',
    top: '59%',
    left: '8%',
  },
};

const slideFour = {
  slideImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWqOln?ver=0612&q=90&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=80&y=214&s=2040&d=765&aim=true',
  slideHeader: 'The journey home',
  slideText: 'Microsoft employee Heather returns home to visit the person who drove her passion for accessible technology—her dad. Meet those who\'ve inspired the people behind our products.',
  slideButtonTxt: 'LEARN MORE',
  headerStyle: {
    position: 'absolute',
    top: '23%',
    left: '56%',
  },
  textStyle: {
    position: 'absolute',
    textAlign: 'left',
    top: '40%',
    left: '56%',
    width: '35%',
  },
  buttonStyle: {
    position: 'absolute',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '0',
    top: '59%',
    left: '56%',
  },
};

const slideFive = {
  slideImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWrRyf?ver=e24a&q=90&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=198&s=2120&d=795&aim=true',
  slideHeader: 'AI for Good',
  slideText: 'Empowering us all with intelligent technology to change the world',
  slideButtonTxt: 'LEARN MORE',
  headerStyle: {
    position: 'absolute',
    color:
        'white',
    top:
        '53%',
    left:
        '7%',
  },
  textStyle: {
    position: 'absolute',
    color:
        'white',
    top:
        '70%',
    left:
        '7%',
  },
  buttonStyle: {
    position: 'absolute',
    color: 'black',
    backgroundColor:
        'white',
    borderRadius:
        '0',
    top:
        '79%',
    left:
        '7%',
  },
};

const slidesOne = [
  <Slide slideImage={slideOne.slideImage}
         slideHeader={slideOne.slideHeader}
         slideText={slideOne.slideText}
         slideButtonTxt={slideOne.slideButtonTxt}
         headerStyle={slideOne.headerStyle}
         textStyle={slideOne.textStyle}
         buttonStyle={slideOne.buttonStyle}
  />,
  <Slide slideImage={slideTwo.slideImage}
         slideHeader={slideTwo.slideHeader}
         slideText={slideTwo.slideText}
         slideButtonTxt={slideTwo.slideButtonTxt}
         headerStyle={slideTwo.headerStyle}
         textStyle={slideTwo.textStyle}
         buttonStyle={slideTwo.buttonStyle}
  />
];

const slidesTwo = [
  <Slide slideImage={slideFour.slideImage}
         slideHeader={slideFour.slideHeader}
         slideText={slideFour.slideText}
         slideButtonTxt={slideFour.slideButtonTxt}
         headerStyle={slideFour.headerStyle}
         textStyle={slideFour.textStyle}
         buttonStyle={slideFour.buttonStyle}
  />,
  <Slide slideImage={slideFive.slideImage}
         slideHeader={slideFive.slideHeader}
         slideText={slideFive.slideText}
         slideButtonTxt={slideFive.slideButtonTxt}
         headerStyle={slideFive.headerStyle}
         textStyle={slideFive.textStyle}
         buttonStyle={slideFive.buttonStyle}
  />
];

/**
 * menu
 */
class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless id={'top-menu'}>
          <Menu.Item as={'a'}>
            <Image src={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31'}
                   id={'microsoft-logo'} alt={''}/>
          </Menu.Item>

          <Menu.Item as={'a'}>
            Office
          </Menu.Item>

          <Menu.Item as={'a'}>
            Windows
          </Menu.Item>

          <Menu.Item as={'a'}>
            Surface
          </Menu.Item>

          <Menu.Item as={'a'}>
            Xbox
          </Menu.Item>

          <Menu.Item as={'a'}>
            Deals
          </Menu.Item>

          <Menu.Item as={'a'}>
            Support
          </Menu.Item>

          <Popup flowing
                 on={'click'}
                 verticalOffset={-10}
                 horizontalOffset={170}
                 className={'popup'}
                 basic trigger={
            <Menu.Item position={'right'}>
              All Microsoft
              <Icon name={'angle down'}/>
            </Menu.Item>
          }>
            <Grid columns={'equal'} container id={'popup-grid'}>
              <Grid.Column style={{ paddingLeft: '2rem' }}>
                <Header as={'h5'} content={'Software'}/>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Windows apps<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>One Drive<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Outlook<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Skype<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>OneNote<br/></Item>
              </Grid.Column>

              <Grid.Column>
                <Header as={'h5'} content={'Header'}/>
                <Item as={'a'} className={'textLink'} href={'index.js'}>PCs & tablets<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Accessories<br/></Item>
              </Grid.Column>

              <Grid.Column>
                <Header as={'h5'} content={'Enertainment'}/>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Xbox games<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>PC Games<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Windows digital games<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Movies & TV<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Books<br/></Item>
              </Grid.Column>

              <Grid.Column>
                <Header as={'h5'} content={'Business'}/>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Microsoft Azure<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Microsoft Dynamics 365<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Microsoft 365<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Microsoft Industry<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Data platform<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Microsoft Advertising<br/></Item>
              </Grid.Column>

              <Grid.Column>
                <Header as={'h5'} content={'Header'}/>
                <Item as={'a'} className={'textLink'} href={'index.js'}>.NET</Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Visual Studio<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Windows Server<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Windows Dev Center<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Docs<br/></Item>
              </Grid.Column>

              <Grid.Column style={{ paddingRight: '2rem' }}>
                <Header as={'h5'} content={'Header'}/>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Microsoft Store<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Microsoft Rewards<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Free downloads & security<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Education<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Store locations<br/></Item>
                <Item as={'a'} className={'textLink'} href={'index.js'}>Gift cards<br/></Item>
              </Grid.Column>

              <Grid.Row centered id={'popup-row'}>
                <a className={'hoverable textLink'} href={'index.js'}>VIEW SITEMAP <Icon name={'angle right'} className={'animatedIcon'}/></a>
              </Grid.Row>
            </Grid>
          </Popup>

          <Menu.Item as={'a'}>
            Search <Icon name={'search'}/>
          </Menu.Item>

          <Menu.Item as={'a'}>
            Cart <Icon name={'shopping cart'}/>
          </Menu.Item>

          <Menu.Item as={'a'}>
            Sign in <Icon name={'user outline'}/>
          </Menu.Item>
        </Menu>
    );
  }
}

/**
 * slide
 */
function Slide(props) {
  return (
      <div className={'carousel'}>
        <Image centered src={props.slideImage}/>
        <Header as={'h2'} content={props.slideHeader}
                style={props.headerStyle}/>
        <p style={props.textStyle}>{props.slideText}</p>
        <Button style={props.buttonStyle} className={'hoverable'}>
          {props.slideButtonTxt}
          <Icon name={'angle right'} className={'animatedIcon'}/>
        </Button>
      </div>
  );
}

/**
 * carousel
 */
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    }
    this.NextSlide = this.NextSlide.bind(this);
    this.PreviousSlide = this.PreviousSlide.bind(this);
  }

  NextSlide() {
    if (this.state.currentSlide < this.props.slides.length - 1) {
      this.setState({
        currentSlide: this.state.currentSlide + 1
      });
    } else {
      this.setState({
        currentSlide: 0
      });
    }
  }

  PreviousSlide() {
    if (this.state.currentSlide > 0) {
      this.setState({
        currentSlide: this.state.currentSlide - 1
      });
    } else {
      this.setState({
        currentSlide: this.props.slides.length - 1
      });
    }
  }

  RenderSlide() {
    let activeSlide = (this.props.slides[this.state.currentSlide]);
    return (
        <div id={'carousel'}>
          {activeSlide}
          <Button icon={'angle left'} circular={true} size={'big'} onClick={this.PreviousSlide}
                  id={'carousel-button-left'}/>
          <Button icon={'angle right'} circular={true} size={'big'} onClick={this.NextSlide}
                  id={'carousel-button-right'}/>
        </div>
    );
  }

  render() {
    return (
        this.RenderSlide()
    )
  }
}

/**
 * body - 6 row grid
 *
 * row 1: carousel
 * row 2: 4 column grid
 * row 3: img
 * row 4: header
 * row 5: 4 column grid
 * row 6: carousel
 * row 7: social media links
 **/
class PageBody extends React.Component {

  render() {
    return (
        <Grid centered id={'page-body'}>

          <Grid.Row centered id={'row-one'}>
            <Carousel
                slides={slidesOne}
            />
          </Grid.Row>

          <Grid.Row centered columns={4} id={'row-two'}>
            <Grid.Column>
              <Image
                  src={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2FHD0?ver=ee66&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true'}
                  as={'a'}
                  href={'index.js'}>
              </Image>

              <Header>For a life less ordinary</Header>
              <p>Go beyond the traditional with the new Surface Laptop 2.</p>
              <a href={'index.js'} className={'hoverable'}>SHOP NOW <Icon name={'angle right'}
                                                                          className={'animatedIcon'}/></a>
            </Grid.Column>

            <Grid.Column>
              <Image
                  src={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWfbJT?ver=8259&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true'}
                  as={'a'}
                  href={'index.js'}>
              </Image>
              <Header>Surface Book 2</Header>
              <p>Powerhouse performance in the ultimate laptop.</p>
              <a href={'index.js'} className={'hoverable'}>SHOP NOW <Icon name={'angle right'}
                                                                          className={'animatedIcon'}/></a>
            </Grid.Column>

            <Grid.Column>
              <Image
                  src={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW9wPJ?ver=211f&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true'}
                  as={'a'}
                  href={'index.js'}>
              </Image>
              <Header>Xbox One X</Header>
              <p>The world's most powerful console.</p>
              <a href={'index.js'} className={'hoverable'}>SHOP NOW <Icon name={'angle right'}
                                                                          className={'animatedIcon'}/></a>
            </Grid.Column>

            <Grid.Column>
              <Image
                  src={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2MIRM?ver=90a8&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&x=272&y=139&aim=true'}
                  as={'a'}
                  href={'index.js'}>
              </Image>
              <Header>This is your 365</Header>
              <p>Every day is an opportunity to achieve with Office 365</p>
              <a href={'index.js'} className={'hoverable'}>SHOP NOW <Icon name={'angle right'}
                                                                          className={'animatedIcon'}/></a>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row id={'row-three'}>
            <Slide
                slideImage={slideThree.slideImage}
                slideHeader={slideThree.slideHeader}
                slideText={slideThree.slideText}
                slideButtonTxt={slideThree.slideButtonTxt}
                headerStyle={slideThree.headerStyle}
                textStyle={slideThree.textStyle}
                buttonStyle={slideThree.buttonStyle}
            />
          </Grid.Row>

          <Grid.Row id={'row-four'}>
            <Grid.Column floated={'left'}>
              <Header as={'h2'}>For Work</Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered columns={4} id={'row-five'}>
            <Grid.Column>
              <Image
                  src={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2G7Pg?ver=2934&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true'}
                  as={'a'}
                  href={'index.js'}>
              </Image>

              <Header>Surface Studio 2</Header>
              <p>Fuel your creativity with brilliant color, blazing graphics, and fast processors.</p>
              <a href={'index.js'} className={'hoverable'}>SHOP NOW <Icon name={'angle right'}
                                                                          className={'animatedIcon'}/></a>
            </Grid.Column>

            <Grid.Column>
              <Image
                  src={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1CmIw?ver=e555&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true'}
                  as={'a'}
                  href={'index.js'} className={'hoverable'}>
              </Image>
              <Header>Windows 10 Enterprise</Header>
              <p>Download the free 90-day evaluation for IT professionals.</p>
              <a href={'index.js'} className={'hoverable'}>DOWNLOAD NOW <Icon name={'angle right'}
                                                                              className={'animatedIcon'}/></a>
            </Grid.Column>

            <Grid.Column>
              <Image
                  src={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2mheW?ver=527a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&x=444&y=171&aim=true'}
                  as={'a'}
                  href={'index.js'}>
              </Image>
              <Header>Office 365 for Business</Header>
              <p>Access your files from anywhere, online or offline.</p>
              <a href={'index.js'} className={'hoverable'}>SHOP NOW <Icon name={'angle right'}
                                                                          className={'animatedIcon'}/></a>
            </Grid.Column>

            <Grid.Column>
              <Image
                  src={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1LJdE?ver=f866&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true'}
                  as={'a'}
                  href={'index.js'}>
              </Image>
              <Header>Microsoft Azure</Header>
              <p>Go serverless—build apps faster without managing infrastructure.</p>
              <a href={'index.js'} className={'hoverable'}>LEARN MORE <Icon name={'angle right'}
                                                                            className={'animatedIcon'}/></a>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row id={'row-six'}>
            <Carousel
                slides={slidesTwo}
            />
          </Grid.Row>

          <Grid.Row id={'row-seven'}>
            <Grid.Column floated={'left'}>
              <p>Follow Microsoft
                <Button color='facebook'>
                  <Icon name='facebook f'/>
                </Button>

                <Button color='twitter'>
                  <Icon name='twitter'/>
                </Button>

                <Button color='twitter'>
                  <Icon link name='linkedin'/>
                </Button>
              </p>
            </Grid.Column>
          </Grid.Row>

        </Grid>
    )
  }
}

/**
 * footer - 2 rows
 * 6 columns
 * 1 column
 **/
class BottomMenu extends React.Component {

  render() {
    return (
        <div>
          <Grid id={'footer'}>
            <Grid.Row columns={6}>
              <Grid.Column>
                <Header as={'h5'} content={'What\'s new'}/>
                <a href={'index.js'} className={'textLink'}>NEW Surface Pro 6<br/></a>
                <a href={'index.js'} className={'textLink'}>NEW Surface Laptop 2<br/></a>
                <a href={'index.js'} className={'textLink'}>NEW Surface Go<br/></a>
                <a href={'index.js'} className={'textLink'}>Xbox One X<br/></a>
                <a href={'index.js'} className={'textLink'}>Xbox One S<br/></a>
                <a href={'index.js'} className={'textLink'}>VR & mixed reality<br/></a>
                <a href={'index.js'} className={'textLink'}>Windows 10 apps<br/></a>
                <a href={'index.js'} className={'textLink'}>Office apps<br/></a>
              </Grid.Column>

              <Grid.Column>
                <Header as={'h5'} content={'Store & Support'}/>
                <a href={'index.js'} className={'textLink'}>Account profile<br/></a>
                <a href={'index.js'} className={'textLink'}>Download Center<br/></a>
                <a href={'index.js'} className={'textLink'}>Sales & support<br/></a>
                <a href={'index.js'} className={'textLink'}>Returns<br/></a>
                <a href={'index.js'} className={'textLink'}>Order tracking<br/></a>
                <a href={'index.js'} className={'textLink'}>Store locations<br/></a>
                <a href={'index.js'} className={'textLink'}>Support<br/></a>
                <a href={'index.js'} className={'textLink'}>Buy online, pick up in store<br/></a>
              </Grid.Column>

              <Grid.Column>
                <Header as={'h5'} content={'Education'}/>
                <a href={'index.js'} className={'textLink'}>Microsoft in education<br/></a>
                <a href={'index.js'} className={'textLink'}>Office for students<br/></a>
                <a href={'index.js'} className={'textLink'}>Office 365 for schools<br/></a>
                <a href={'index.js'} className={'textLink'}>Deals for students & parents<br/></a>
                <a href={'index.js'} className={'textLink'}>Microsoft Azure in education<br/></a>
              </Grid.Column>

              <Grid.Column>
                <Header as={'h5'} content={'Enterprise'}/>
                <a href={'index.js'} className={'textLink'}>Microsoft Azure<br/></a>
                <a href={'index.js'} className={'textLink'}>Microsoft Industry<br/></a>
                <a href={'index.js'} className={'textLink'}>Data platform<br/></a>
                <a href={'index.js'} className={'textLink'}>Find a solution provider<br/></a>
                <a href={'index.js'} className={'textLink'}>Microsoft partner resources<br/></a>
                <a href={'index.js'} className={'textLink'}>Microsoft AppSource<br/></a>
                <a href={'index.js'} className={'textLink'}>Health<br/></a>
                <a href={'index.js'} className={'textLink'}>Financial services<br/></a>
              </Grid.Column>

              <Grid.Column>
                <Header as={'h5'} content={'Developer'}/>
                <a href={'index.js'} className={'textLink'}>Microsoft Visual Studio<br/></a>
                <a href={'index.js'} className={'textLink'}>Windows Dev Center<br/></a>
                <a href={'index.js'} className={'textLink'}>Developer Network<br/></a>
                <a href={'index.js'} className={'textLink'}>TechNet<br/></a>
                <a href={'index.js'} className={'textLink'}>Microsoft developer program<br/></a>
                <a href={'index.js'} className={'textLink'}>Channel 9<br/></a>
                <a href={'index.js'} className={'textLink'}>Office Dev Center<br/></a>
                <a href={'index.js'} className={'textLink'}>Microsoft Garage<br/></a>
              </Grid.Column>

              <Grid.Column>
                <Header as={'h5'} content={'Company'}/>
                <a href={'index.js'} className={'textLink'}>Careers<br/></a>
                <a href={'index.js'} className={'textLink'}>About Microsoft<br/></a>
                <a href={'index.js'} className={'textLink'}>Company news<br/></a>
                <a href={'index.js'} className={'textLink'}>Privacy at Microsoft<br/></a>
                <a href={'index.js'} className={'textLink'}>Investors<br/></a>
                <a href={'index.js'} className={'textLink'}>Diversity and inclusion<br/></a>
                <a href={'index.js'} className={'textLink'}>Accessibility<br/></a>
                <a href={'index.js'} className={'textLink'}>Security<br/></a>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Menu borderless id={'bottom-menu'}>
            <Menu.Item as={'a'} href={'index.js'}>
              <Icon name={'globe'}/>
              English(United States)
            </Menu.Item>

            <Menu.Item  as={'a'} href={'index.js'} position={'right'}>Sitemap</Menu.Item>
            <Menu.Item as={'a'} href={'index.js'}>Contact Microsoft</Menu.Item>
            <Menu.Item as={'a'} href={'index.js'}>Privacy & cookies</Menu.Item>
            <Menu.Item as={'a'} href={'index.js'}>Terms of use</Menu.Item>
            <Menu.Item as={'a'} href={'index.js'}>Trademarks</Menu.Item>
            <Menu.Item as={'a'} href={'index.js'}>Safety & eco</Menu.Item>
            <Menu.Item as={'a'} href={'index.js'}>About our ads</Menu.Item>
            <Menu.Item>© Microsoft 2019</Menu.Item>
          </Menu>
        </div>
    );
  }
}

/**
 * Class Microsoft renders the different elements
 **/
class Microsoft extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <PageBody/>
          <BottomMenu/>
        </div>
    );
  }
}

ReactDOM.render(
    <Microsoft/>
    , document.getElementById('root'));
