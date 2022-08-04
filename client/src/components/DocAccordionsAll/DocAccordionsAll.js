import { Container } from '@mui/system';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DocChipsAccordion from '../DocOneAccordion/DocChipsAccordion';
import DocOneAccordion from '../DocOneAccordion/DocOneAccordion';
import DocPriceAccordion from '../DocOneAccordion/DocPriceAccordion';

export default function DocAccordionsAll({ doc }) {
  const profiles = useSelector((state) => state.profiles);
  const categories = useSelector((state) => state.categories);

  const filteredProfiles = profiles?.filter((profile) => {
    const compare = doc.Profiles.find((el) => el.id === profile.id);
    return !compare;
  });

  const filteredCategories = categories?.filter((category) => {
    const compare = doc.Categories?.find((el) => el.id === category.id);
    return !compare;
  });

  return (
    <Container sx={{ py: 3, minWidth: '35rem' }}>
      <DocOneAccordion type="experience" content={doc.Doc_info?.experience} />
      <DocChipsAccordion type="Profiles" content={doc.Profiles?.length > 0 ? doc.Profiles : null} options={filteredProfiles} />
      <DocChipsAccordion type="Categories" content={doc.Categories?.length > 0 ? doc.Categories : null} options={filteredCategories} />
      <DocPriceAccordion type="Price_lists" content={doc.Price_lists?.length > 0 ? doc.Price_lists : null} />
    </Container>
  );
}
