/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: playerQuery
// ====================================================

export interface playerQuery_activeSermon_authors {
  id: string;
  name: string;
}

export interface playerQuery_activeSermon {
  id: string;
  name: string;
  audioUrl: string | null;
  bannerUrl: string | null;
  authors: playerQuery_activeSermon_authors[];
}

export interface playerQuery {
  activeSermon: playerQuery_activeSermon | null;
}
