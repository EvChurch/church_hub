/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: sermonQuery
// ====================================================

export interface sermonQuery_resources_nodes_authors {
  __typename: "Author";
  id: string;
  name: string;
}

export interface sermonQuery_resources_nodes_topics {
  __typename: "Topic";
  id: string;
  name: string;
}

export interface sermonQuery_resources_nodes_scriptures {
  __typename: "Scripture";
  id: string;
  name: string;
}

export interface sermonQuery_resources_nodes {
  __typename: "Resource";
  id: string;
  name: string;
  snippet: string | null;
  content: string | null;
  audioUrl: string | null;
  youtubeUrl: string | null;
  bannerUrl: string | null;
  authors: sermonQuery_resources_nodes_authors[];
  topics: sermonQuery_resources_nodes_topics[];
  scriptures: sermonQuery_resources_nodes_scriptures[];
}

export interface sermonQuery_resources {
  __typename: "ResourceConnection";
  /**
   * A list of nodes.
   */
  nodes: (sermonQuery_resources_nodes | null)[] | null;
}

export interface sermonQuery {
  resources: sermonQuery_resources;
}

export interface sermonQueryVariables {
  ids?: string[] | null;
}
