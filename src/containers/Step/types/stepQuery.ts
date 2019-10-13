/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: stepQuery
// ====================================================

export interface stepQuery_steps_nodes_locationConnectionSteps_nodes_location {
  id: string;
  name: string;
}

export interface stepQuery_steps_nodes_locationConnectionSteps_nodes {
  id: string;
  elvantoFormId: string;
  content: string | null;
  location: stepQuery_steps_nodes_locationConnectionSteps_nodes_location;
}

export interface stepQuery_steps_nodes_locationConnectionSteps {
  /**
   * A list of nodes.
   */
  nodes: (stepQuery_steps_nodes_locationConnectionSteps_nodes | null)[] | null;
}

export interface stepQuery_steps_nodes {
  id: string;
  name: string;
  content: string | null;
  bannerUrl: string;
  locationConnectionSteps: stepQuery_steps_nodes_locationConnectionSteps;
}

export interface stepQuery_steps {
  /**
   * A list of nodes.
   */
  nodes: (stepQuery_steps_nodes | null)[] | null;
}

export interface stepQuery {
  steps: stepQuery_steps;
}

export interface stepQueryVariables {
  ids?: string[] | null;
}
