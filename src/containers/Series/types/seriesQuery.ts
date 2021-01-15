/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seriesQuery
// ====================================================

export interface seriesQuery_series_nodes_resources_nodes_authors {
  id: string;
  name: string;
}

export interface seriesQuery_series_nodes_resources_nodes {
  id: string;
  name: string;
  publishedAt: any | null;
  authors: seriesQuery_series_nodes_resources_nodes_authors[];
}

export interface seriesQuery_series_nodes_resources {
  /**
   * A list of nodes.
   */
  nodes: (seriesQuery_series_nodes_resources_nodes | null)[] | null;
}

export interface seriesQuery_series_nodes {
  id: string;
  name: string;
  bannerUrl: string | null;
  resources: seriesQuery_series_nodes_resources;
}

export interface seriesQuery_series {
  /**
   * A list of nodes.
   */
  nodes: (seriesQuery_series_nodes | null)[] | null;
}

export interface seriesQuery {
  series: seriesQuery_series;
}

export interface seriesQueryVariables {
  ids?: string[] | null;
}
