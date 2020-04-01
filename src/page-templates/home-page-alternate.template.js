import React from "react"

import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import {
    safelyGetFrontMatter,
    withFallback,
} from "../cms"

export const HomePageAlternateTemplate = ({ title, sections }) => (
    <article>
        <SEO title={title} />
        <Heading tag={1}>{title}</Heading>
        {withFallback(sections, []).map((section, i) => {
            return (
                <section key={i}>
                    <h2>{section.title}</h2>
                    <RenderMarkdown
                        md={section.body}
                    />
                    <hr />
                </section>
            )
        })}
    </article>
)

const HomePageAlternate = ({ pageContext }) => {
    return (
        <HomePageAlternateTemplate
            {...safelyGetFrontMatter(pageContext)}
            isPreview={false}
        />
    )
}

export default HomePageAlternate
