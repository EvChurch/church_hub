/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seriesListQuery
// ====================================================

export interface seriesListQuery_series_nodes {
  id: string;
  name: string;
  bannerUrl: string | null;
}

export interface seriesListQuery_series {
  /**
   * A list of nodes.
   */
  nodes: (seriesListQuery_series_nodes | null)[] | null;
}

export interface seriesListQuery {
  series: seriesListQuery_series;
}
