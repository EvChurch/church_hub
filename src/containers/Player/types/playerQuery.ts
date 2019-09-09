/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: playerQuery
// ====================================================

export interface playerQuery_activeSermon_authors {
  __typename: "Author";
  id: string;
  name: string;
}

export interface playerQuery_activeSermon_topics {
  __typename: "Topic";
  id: string;
  name: string;
}

export interface playerQuery_activeSermon_scriptures {
  __typename: "Scripture";
  id: string;
  name: string;
}

export interface playerQuery_activeSermon {
  __typename: "Resource";
  id: string;
  name: string;
  snippet: string | null;
  content: string | null;
  audioUrl: string | null;
  youtubeUrl: string | null;
  bannerUrl: string | null;
  authors: playerQuery_activeSermon_authors[];
  topics: playerQuery_activeSermon_topics[];
  scriptures: playerQuery_activeSermon_scriptures[];
}

export interface playerQuery {
  activeSermon: playerQuery_activeSermon | null;
}
