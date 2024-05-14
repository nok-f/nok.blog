import React from 'react';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';

import InternalLink from 'components/InternalLink';

async function getCategories(): Promise<Record<string, number>> {
  const categories: Record<string, number> = {};
  allPosts.forEach((post) => {
    for (const category of post.categories) {
      if (Object.prototype.hasOwnProperty.call(categories, category)) {
        categories[category]++;
      } else {
        categories[category] = 1;
      }
    }
  });
  return categories;
}

async function CategoryLayout() {
  const categories = await getCategories();
  if (!categories) notFound();

  const rankedCategories = Object.keys(categories).sort((a, b) => {
    // @ts-ignore
    if (categories[a] < categories[b]) return 1;
    // @ts-ignore
    if (categories[a] > categories[b]) return -1;
    return 0;
  });

  return (
    <>
      <h2 className="my-2 text-3xl font-bold" text-3xl font-bold>
        カテゴリー一覧
      </h2>
      <ul className="mt-5 ml-5 list-disc">
        {rankedCategories.map((category) => (
          <li key={category} className="my-2">
            <h2 className="mt-1">
              <InternalLink href={`/categories/${category}`}>
                {category}({categories[category]})
              </InternalLink>
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoryLayout;
