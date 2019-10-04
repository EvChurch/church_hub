/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: eventQuery
// ====================================================

export interface eventQuery_events_nodes_location {
  id: string;
  name: string;
}

export interface eventQuery_events_nodes {
  id: string;
  name: string;
  snippet: string;
  bannerUrl: string;
  startAt: string;
  endAt: string;
  address: string;
  content: string;
  location: eventQuery_events_nodes_location;
}

export interface eventQuery_events {
  /**
   * A list of nodes.
   */
  nodes: (eventQuery_events_nodes | null)[] | null;
}

export interface eventQuery {
  events: eventQuery_events;
}

export interface eventQueryVariables {
  ids?: string[] | null;
}