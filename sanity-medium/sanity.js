import {
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient,
} from "next-sanity"; 
//import myConfiguredSanityClient from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'

export const config ={
    /**
     * Find your project ID and dataset in 'sanity.json' in your studie project
     * These are considered 'public', but hyou can use environment variables
     * if you wnant to differ between local dev and production
     * https://nextjs.org/docs/basic-features/environment-variables 
     **/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-06-06",
    /** 
     * Set useCdn to 'false' if your application requires the freshest possible
     * data always potentially slower and a bit more expensive.
     * Authenticated request like preview will always bypass the CDN
     **/
    useCdn: process.env.NODE_ENV === 'production',
};

// Set up the client for fetching data in the getProps page functions from sanity
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset
 * reference data in your documents.
 *  https://www.sanity.io/docs/image-url    for more information
 * export const urlFor = (source) => createImageUrlBuilder(config).image(source);
 */
const builder = imageUrlBuilder(config)
export const urlFor = (source) => builder.image(source);

