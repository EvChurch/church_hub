import { Container } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { FC, Fragment } from 'react';
import { stepListQuery_steps_nodes as stepListQueryStepsNodes } from '../../containers/StepList/types/stepListQuery';
import Alert from './Alert/Alert';
import Item from './Item';

interface Props {
  loading?: boolean;
  items?: stepListQueryStepsNodes[];
}

const StepList: FC<Props> = ({ loading, items }) => {
  const router = useRouter();

  return (
    <Container>
      {router.query.connectCard && (
        <Alert
          initialOpen={router.query.connectCard.valueOf() === 'true'}
          alertMessage={'Thanks for filling out your connect card'}
        />
      )}
      {loading ? (
        <Item loading={true}></Item>
      ) : (
        <Fragment>
          {items &&
            items.map(step => (
              <Fragment key={step.id}>
                <Item step={step} />
              </Fragment>
            ))}
        </Fragment>
      )}
    </Container>
  );
};

export default StepList;
