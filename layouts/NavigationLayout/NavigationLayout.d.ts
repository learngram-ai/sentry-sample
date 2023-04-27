import * as React from "react";

declare class NavigationLayout extends React.Component<
  NavigationLayoutProps,
  any
> {}

interface NavigationLayoutProps {
  title?: string;
  elevated?: boolean;
  loading?: boolean;

  /**
   * NavigationLayout accepts custom header component. If present, @headerComponent will
   * replace the default header of NavigationLayout. That means, @param title and @param elevated
   * will not be required.
   */
  headerComponent?: React.ReactElement;
}

declare var NavigationLayoutType: typeof NavigationLayout;
export = NavigationLayoutType;
