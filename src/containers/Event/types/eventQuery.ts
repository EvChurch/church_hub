/* tslint:disable */
/* eslint-disable */
// @generated
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
  bannerUrl: string;
  startAt: any;
  endAt: any;
  address: string;
  content: string;
  registrationUrl: string | null;
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
