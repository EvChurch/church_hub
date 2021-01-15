/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: eventListQuery
// ====================================================

export interface eventListQuery_events_nodes_location {
  id: string;
  name: string;
}

export interface eventListQuery_events_nodes {
  id: string;
  name: string;
  bannerUrl: string;
  startAt: any;
  endAt: any;
  address: string;
  location: eventListQuery_events_nodes_location;
}

export interface eventListQuery_events {
  /**
   * A list of nodes.
   */
  nodes: (eventListQuery_events_nodes | null)[] | null;
}

export interface eventListQuery {
  events: eventListQuery_events;
}

export interface eventListQueryVariables {
  featured?: boolean | null;
}
