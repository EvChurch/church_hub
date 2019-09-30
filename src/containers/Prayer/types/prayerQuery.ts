/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: prayerQuery
// ====================================================

export interface prayerQuery_prayers_nodes {
  id: string;
  name: string;
  snippet: string;
  content: string | null;
  bannerUrl: string;
}

export interface prayerQuery_prayers {
  /**
   * A list of nodes.
   */
  nodes: (prayerQuery_prayers_nodes | null)[] | null;
}

export interface prayerQuery {
  prayers: prayerQuery_prayers;
}

export interface prayerQueryVariables {
  ids?: string[] | null;
}
