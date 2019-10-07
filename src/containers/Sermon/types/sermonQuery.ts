/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: sermonQuery
// ====================================================

export interface sermonQuery_resources_nodes_authors {
  id: string;
  name: string;
}

export interface sermonQuery_resources_nodes_topics {
  id: string;
  name: string;
}

export interface sermonQuery_resources_nodes_connectionScriptures_scripture {
  id: string;
  name: string;
}

export interface sermonQuery_resources_nodes_connectionScriptures {
  id: string;
  range: string | null;
  content: string;
  scripture: sermonQuery_resources_nodes_connectionScriptures_scripture;
}

export interface sermonQuery_resources_nodes {
  id: string;
  name: string;
  snippet: string | null;
  content: string | null;
  audioUrl: string | null;
  youtubeUrl: string | null;
  bannerUrl: string | null;
  sermonNotes: string | null;
  connectGroupNotes: string | null;
  authors: sermonQuery_resources_nodes_authors[];
  topics: sermonQuery_resources_nodes_topics[];
  connectionScriptures: sermonQuery_resources_nodes_connectionScriptures[];
}

export interface sermonQuery_resources {
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
