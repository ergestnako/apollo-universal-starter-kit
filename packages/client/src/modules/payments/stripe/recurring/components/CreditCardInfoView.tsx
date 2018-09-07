import React from 'react';
import { Link } from 'react-router-dom';
import { TranslateFunction } from '../../../../../i18n';
import { Button, CardGroup, CardTitle, CardText } from '../../../../common/components/web';

interface CardInfoViewProps {
  loading: boolean;
  creditCard: {
    expiryMonth: number;
    expiryYear: number;
    last4: string;
    brand: string;
  };
  t: TranslateFunction;
  navigation?: any;
}

export default ({ loading, t, creditCard }: CardInfoViewProps) => {
  return (
    <div>
      {!loading &&
        creditCard &&
        creditCard.expiryMonth &&
        creditCard.expiryYear &&
        creditCard.last4 &&
        creditCard.brand && (
          <CardGroup>
            <CardTitle>{t('card.title')}</CardTitle>
            <CardText>
              {t('card.text.card')}: {creditCard.brand} ************
              {creditCard.last4}
            </CardText>
            <CardText>
              {t('card.text.expires')}: {creditCard.expiryMonth}/{creditCard.expiryYear}
            </CardText>
            <CardText>
              <Link to="/update-card">
                <Button color="primary">{t('card.btnUpdate')}</Button>
              </Link>
            </CardText>
          </CardGroup>
        )}
    </div>
  );
};