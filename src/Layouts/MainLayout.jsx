import React from "react";
import MainWrapper from "../shared/UI/Wrappers/MainPageWrapper";
import SideMenuWrapper from "../shared/UI/Wrappers/SideMenuWrapper";
import ContentWrapper from "../shared/UI/Wrappers/PageContentWrapper";
import MainMenu from "../shared/Menus/MainMenu";
import SideMenu from "../shared/Menus/SideMenu";
import Footer from "../shared/Footer/Index";
import Modal from "../shared/UI/Modal/Modal";
import PropTypes from "prop-types";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <MainWrapper>
        <SideMenuWrapper
          showSideBar={props.showSideBar}
          toggleSideMenu={props.toggleSideBar}
        >
          <SideMenu
            cartItemNumber={props.storeCartCount}
            showBackDrop={props.showSideBar}
          />
        </SideMenuWrapper>
        <ContentWrapper>
          <header>
            <MainMenu
              cartItemNumber={props.storeCartCount}
              toggleSideBar={props.toggleSideBar}
            />
          </header>
          <main>
            {props.children}
            {props.showModal ? (
              <Modal
                showModal={props.showModal}
                closeModalClick={props.closeModalProp}
              >
                {props.modalMessage}
              </Modal>
            ) : null}
          </main>
          <footer>
            <Footer />
          </footer>
        </ContentWrapper>
      </MainWrapper>
    </React.Fragment>
  );
};

MainLayout.propTpes = {
  storeCartCount: PropTypes.number.isRequired,
  showModal: PropTypes.bool,
  closeModalClick: PropTypes.func,
  modalMessage: PropTypes.string,
  showSideBar: PropTypes.bool,
  toggleSideBar: PropTypes.func.isRequired,
};

export default MainLayout;
