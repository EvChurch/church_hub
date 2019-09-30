/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: prayerListQuery
// ====================================================

export interface prayerListQuery_prayers_nodes {
  id: string;
  name: string;
  snippet: string;
  bannerUrl: string;
}

export interface prayerListQuery_prayers {
  /**
   * A list of nodes.
   */
  nodes: (prayerListQuery_prayers_nodes | null)[] | null;
}

export interface prayerListQuery {
  prayers: prayerListQuery_prayers;
}
