/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: latestSermonQuery
// ====================================================

export interface latestSermonQuery_resources_edges_node_authors {
  name: string;
}

export interface latestSermonQuery_resources_edges_node_connectionScriptures_scripture {
  name: string;
}

export interface latestSermonQuery_resources_edges_node_connectionScriptures {
  range: string | null;
  scripture: latestSermonQuery_resources_edges_node_connectionScriptures_scripture;
}

export interface latestSermonQuery_resources_edges_node_series {
  id: string;
  bannerUrl: string | null;
}

export interface latestSermonQuery_resources_edges_node {
  id: string;
  publishedAt: any | null;
  name: string;
  authors: latestSermonQuery_resources_edges_node_authors[];
  connectionScriptures: latestSermonQuery_resources_edges_node_connectionScriptures[];
  series: latestSermonQuery_resources_edges_node_series[];
}

export interface latestSermonQuery_resources_edges {
  /**
   * The item at the end of the edge.
   */
  node: latestSermonQuery_resources_edges_node | null;
}

export interface latestSermonQuery_resources {
  /**
   * A list of edges.
   */
  edges: (latestSermonQuery_resources_edges | null)[] | null;
}

export interface latestSermonQuery {
  resources: latestSermonQuery_resources;
}
