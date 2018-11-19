/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AppHeader {}
  interface AppHeaderAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppUsefulInformationItem {
    'viewState': any;
  }
  interface AppUsefulInformationItemAttributes extends StencilHTMLAttributes {
    'viewState'?: any;
  }

  interface AppUsefulInformation {
    'viewState': any;
  }
  interface AppUsefulInformationAttributes extends StencilHTMLAttributes {
    'viewState'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppHeader': Components.AppHeader;
    'AppRoot': Components.AppRoot;
    'AppUsefulInformationItem': Components.AppUsefulInformationItem;
    'AppUsefulInformation': Components.AppUsefulInformation;
  }

  interface StencilIntrinsicElements {
    'app-header': Components.AppHeaderAttributes;
    'app-root': Components.AppRootAttributes;
    'app-useful-information-item': Components.AppUsefulInformationItemAttributes;
    'app-useful-information': Components.AppUsefulInformationAttributes;
  }


  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
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
    'app-header': HTMLAppHeaderElement
    'app-root': HTMLAppRootElement
    'app-useful-information-item': HTMLAppUsefulInformationItemElement
    'app-useful-information': HTMLAppUsefulInformationElement
  }

  interface ElementTagNameMap {
    'app-header': HTMLAppHeaderElement;
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
