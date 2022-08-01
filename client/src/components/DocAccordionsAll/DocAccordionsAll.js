import React from 'react';
import DocOneAccordion from '../DocOneAccordion/DocOneAccordion';
import DocPriceAccordion from '../DocOneAccordion/DocPriceAccordion';

export default function DocAccordionsAll({ doc }) {
  return (
    <div>
      <DocOneAccordion type="experience" content={doc.Doc_Info?.experience} />
      <DocOneAccordion type="profiles" content={doc.Profiles?.length > 0 ? doc.Profiles.map((el) => el.type) : null} />
      <DocOneAccordion type="categories" content={doc.Categories?.length > 0 ? doc.Categories.map((el) => el.type) : null} />
      <DocPriceAccordion type="price_list" content={doc.Price_lists?.length > 0 ? doc.Price_lists : null} />
    </div>
  );
}
