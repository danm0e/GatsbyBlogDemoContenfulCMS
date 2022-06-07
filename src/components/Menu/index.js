import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Wrapper, MenuItem, SubMenuItem } from "./style";

export const Menu = () => {
  const result = useStaticQuery(graphql`
    fragment menuItemData on ContentfulMenuItem {
      id
      label
      page {
        ... on ContentfulPage {
          slug
        }
        ... on ContentfulBlog {
          slug
        }
      }
    }

    query MenuQuery {
      contentfulMenu {
        menuItems {
          ...menuItemData
          subMenuItems {
            ...menuItemData
          }
        }
      }
    }
  `);

  const {
    contentfulMenu: { menuItems },
  } = result;

  return (
    <Wrapper>
      {menuItems.map(({ id, label, page, subMenuItems }) => (
        <MenuItem key={id}>
          <Link to={`/${page?.slug}`}>{label}</Link>
          {subMenuItems && (
            <SubMenuItem>
              {subMenuItems.map(({ id, label, page }) => (
                <Link key={id} to={`/${page.slug}`}>
                  {label}
                </Link>
              ))}
            </SubMenuItem>
          )}
        </MenuItem>
      ))}
    </Wrapper>
  );
};

// gatsby uses prefetching when using the Link component so that the page is instantly loaded on click
// ...only on internal pages
