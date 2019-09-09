/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: playerQuery
// ====================================================

export interface playerQuery_activeSermon_authors {
  id: string;
  name: string;
}

export interface playerQuery_activeSermon_topics {
  id: string;
  name: string;
}

export interface playerQuery_activeSermon_scriptures {
  id: string;
  name: string;
}

export interface playerQuery_activeSermon {
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
