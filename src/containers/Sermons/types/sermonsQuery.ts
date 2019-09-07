/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: sermonsQuery
// ====================================================

export interface sermonsQuery_resources_nodes_topics {
  __typename: "Topic";
  id: string;
  name: string;
}

export interface sermonsQuery_resources_nodes_scriptures {
  __typename: "Scripture";
  id: string;
  name: string;
}

export interface sermonsQuery_resources_nodes {
  __typename: "Resource";
  id: string;
  name: string;
  snippet: string | null;
  content: string | null;
  audioUrl: string | null;
  youtubeUrl: string | null;
  topics: sermonsQuery_resources_nodes_topics[];
  scriptures: sermonsQuery_resources_nodes_scriptures[];
}

export interface sermonsQuery_resources {
  __typename: "ResourceConnection";
  /**
   * A list of nodes.
   */
  nodes: (sermonsQuery_resources_nodes | null)[] | null;
}

export interface sermonsQuery {
  resources: sermonsQuery_resources;
}
