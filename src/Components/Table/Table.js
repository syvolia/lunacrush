import React from 'react'
import './Table.css'
function Table({ socialVol, socialEng, socialContributors, socialDominance, averageSentiment,
    redditComments,
    redditCommentsScore,
    redditPosts,
    redditPostsScore,
    sentimentAbsolute,
    sentimentRelative,
    socialImpactScore,
    socialScore,
    socialScore24,
}) {
    return (
        <div className="table">
            <table>
                <tr>
                    <td>Social  Volume</td>
                    <td>{socialVol}</td>

                </tr>
                <tr>
                    <td>Social Engagement</td>
                    <td>{socialEng}</td>
                </tr>
                <tr>
                    <td>Social Contributors</td>
                    <td>{socialContributors}</td>
                </tr>
                <tr>
                    <td>Social Dominance</td>
                    <td>{socialDominance}</td>
                </tr>
                <tr>
                    <td>Average Sentiment</td>
                    <td>{averageSentiment}</td>
                </tr>
                <tr>
                    <td>Reddit Comments</td>
                    <td>{redditComments}</td>
                </tr>



                <tr>
                    <td>Reddit Comments Score</td>
                    <td>{redditCommentsScore}</td>

                </tr>
                <tr>
                    <td>Reddit Posts</td>
                    <td>{redditPosts}</td>
                </tr>
                <tr>
                    <td>Reddit Posts Score</td>
                    <td>{redditPostsScore}</td>
                </tr>
                <tr>
                    <td>Sentiment Absolute</td>
                    <td>{sentimentAbsolute}</td>
                </tr>

                <tr>
                    <td>Sentiment  Relative</td>
                    <td>{sentimentRelative}</td>
                </tr>
                <tr>
                    <td>Social Impact Score</td>
                    <td>{socialImpactScore}</td>
                </tr>
                <tr>
                    <td>Social  Score</td>
                    <td>{socialScore}</td>
                </tr>
                <tr>
                    <td>Social Score 24hrs</td>
                    <td>{socialScore24}</td>
                </tr>
            </table>
        </div>
    )
}

export default Table
