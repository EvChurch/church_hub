/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: stepListQuery
// ====================================================

export interface stepListQuery_steps_nodes {
  id: string;
  name: string;
  bannerUrl: string;
}

export interface stepListQuery_steps {
  /**
   * A list of nodes.
   */
  nodes: (stepListQuery_steps_nodes | null)[] | null;
}

export interface stepListQuery {
  steps: stepListQuery_steps;
}

export interface stepListQueryVariables {
  featured?: boolean | null;
}
