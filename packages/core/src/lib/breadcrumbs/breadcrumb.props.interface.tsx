export interface IBreadcrumbsProps {
    /**
     * Breadcrumbs to display
     */
    crumbs: Breadcrumb[] | undefined;
}

export interface Breadcrumb {
  label: string;
  href: string;
}
