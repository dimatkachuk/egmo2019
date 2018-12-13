/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  IAppContactsItem,
} from './interfaces/app-contacts-item.interface';
import {
  IAppContacts,
} from './interfaces/app-contacts.interface';
import {
  IAppUsefulInformation,
} from './interfaces/app-useful-information.interface';


export namespace Components {

  interface AppAbout {}
  interface AppAboutAttributes extends StencilHTMLAttributes {}

  interface AppContactsItem {
    'viewState': IAppContactsItem;
  }
  interface AppContactsItemAttributes extends StencilHTMLAttributes {
    'viewState'?: IAppContactsItem;
  }

  interface AppContacts {
    'viewState': IAppContacts;
  }
  interface AppContactsAttributes extends StencilHTMLAttributes {
    'viewState'?: IAppContacts;
  }

  interface AppHeader {}
  interface AppHeaderAttributes extends StencilHTMLAttributes {}

  interface AppLanding {}
  interface AppLandingAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppUsefulInformationItem {
    'viewState': any;
  }
  interface AppUsefulInformationItemAttributes extends StencilHTMLAttributes {
    'viewState'?: any;
  }

  interface AppUsefulInformation {
    'viewState': IAppUsefulInformation;
  }
  interface AppUsefulInformationAttributes extends StencilHTMLAttributes {
    'viewState'?: IAppUsefulInformation;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppAbout': Components.AppAbout;
    'AppContactsItem': Components.AppContactsItem;
    'AppContacts': Components.AppContacts;
    'AppHeader': Components.AppHeader;
    'AppLanding': Components.AppLanding;
    'AppRoot': Components.AppRoot;
    'AppUsefulInformationItem': Components.AppUsefulInformationItem;
    'AppUsefulInformation': Components.AppUsefulInformation;
  }

  interface StencilIntrinsicElements {
    'app-about': Components.AppAboutAttributes;
    'app-contacts-item': Components.AppContactsItemAttributes;
    'app-contacts': Components.AppContactsAttributes;
    'app-header': Components.AppHeaderAttributes;
    'app-landing': Components.AppLandingAttributes;
    'app-root': Components.AppRootAttributes;
    'app-useful-information-item': Components.AppUsefulInformationItemAttributes;
    'app-useful-information': Components.AppUsefulInformationAttributes;
  }


  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppContactsItemElement extends Components.AppContactsItem, HTMLStencilElement {}
  var HTMLAppContactsItemElement: {
    prototype: HTMLAppContactsItemElement;
    new (): HTMLAppContactsItemElement;
  };

  interface HTMLAppContactsElement extends Components.AppContacts, HTMLStencilElement {}
  var HTMLAppContactsElement: {
    prototype: HTMLAppContactsElement;
    new (): HTMLAppContactsElement;
  };

  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };

  interface HTMLAppLandingElement extends Components.AppLanding, HTMLStencilElement {}
  var HTMLAppLandingElement: {
    prototype: HTMLAppLandingElement;
    new (): HTMLAppLandingElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppUsefulInformationItemElement extends Components.AppUsefulInformationItem, HTMLStencilElement {}
  var HTMLAppUsefulInformationItemElement: {
    prototype: HTMLAppUsefulInformationItemElement;
    new (): HTMLAppUsefulInformationItemElement;
  };

  interface HTMLAppUsefulInformationElement extends Components.AppUsefulInformation, HTMLStencilElement {}
  var HTMLAppUsefulInformationElement: {
    prototype: HTMLAppUsefulInformationElement;
    new (): HTMLAppUsefulInformationElement;
  };

  interface HTMLElementTagNameMap {
    'app-about': HTMLAppAboutElement
    'app-contacts-item': HTMLAppContactsItemElement
    'app-contacts': HTMLAppContactsElement
    'app-header': HTMLAppHeaderElement
    'app-landing': HTMLAppLandingElement
    'app-root': HTMLAppRootElement
    'app-useful-information-item': HTMLAppUsefulInformationItemElement
    'app-useful-information': HTMLAppUsefulInformationElement
  }

  interface ElementTagNameMap {
    'app-about': HTMLAppAboutElement;
    'app-contacts-item': HTMLAppContactsItemElement;
    'app-contacts': HTMLAppContactsElement;
    'app-header': HTMLAppHeaderElement;
    'app-landing': HTMLAppLandingElement;
    'app-root': HTMLAppRootElement;
    'app-useful-information-item': HTMLAppUsefulInformationItemElement;
    'app-useful-information': HTMLAppUsefulInformationElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
