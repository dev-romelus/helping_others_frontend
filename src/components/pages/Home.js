import React, { useMemo } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import styled from 'styled-components';

import authHeader from '../../utils/auth-header';

import Volunteers from '../../assets/images/volunteers.jpeg'
import Card from '../helpers/Card';
import Testimony from '../helpers/Testimony';


const fetcher = url => axios.get(url, { headers: authHeader() }).then(res => res.data);

const Home = ({ className }) => {
    const { data: services } = useSWR('https://helping-others.herokuapp.com/api/v1/number-of-requests', fetcher, { refreshInterval: 1000 });

    const numberUnmetServices = useMemo(() => {
        return services ? services :  0;
    }, [services])

    return (
        <div className={className}>
            <div className='nav'>
                <h2>Aid Platform</h2>

                <div className='links'>
                    <a href='/login'>Login</a>
                    <a href='/register'>Register</a>
                </div>
            </div>

            <div className='image'>
                <img src={Volunteers} alt='social' />
            </div>

            <div className='container'>
                <div style={{ marginTop: '0.5rem' }}>
                    <span>
                        <h2>
                            <strong>
                                The platform that facilitates the connection between individuals with professional or private providers. 
                            </strong>
                        </h2>
                    </span>
                </div>

                <section>
                    <h2>Key figures in 2022</h2>
                    <div className='key_figure grid'>
                        <div>
                            <h3>Currently in 7 European countries</h3>
                        </div>
                        <div>
                            <h3>Number of unfulfilled help requests {numberUnmetServices}</h3>
                        </div>
                        <div>
                            <h3>Over 1 000 members have joined us</h3>
                        </div> 
                    </div>

                    <h2>How does it work?</h2>
                    <div className='cards grid'>
                        <Card icon='post_add' title='Request a service' description='Describe your request and publish' />
                        <Card icon='verified' title='Identity check' description='To ensure the safety of all our users, we verify the identity of all our applicants' />
                        <Card icon='autorenew' title='Satisfied or Redone' description='100% Satisfaction Guarantee' />
                    </div>

                    <h2>Your neighbors testify</h2>
                    <div className='testimonials'>
                        <Testimony 
                            photo='https://media.istockphoto.com/photos/young-smiling-africanamerican-man-over-white-background-picture-id1081381240?k=20&m=1081381240&s=170667a&w=0&h=zI-Ptw_38pVKwc4EvS7DlGsm4P4MgjRbo7YCEz4ce2I='
                            name='Steven'
                            description='I was looking for a belt sander, having some work to do. I found one 2 km from my home, thanks to a neighbor who answered me by offering me his.' 
                        />
                        <Testimony 
                            photo='https://img.freepik.com/free-photo/indian-ethnicity-happy-woman-portrait_53876-153598.jpg?w=2000' 
                            name='Sarah' 
                            description='I was able to help several families in their administrative process.'
                        />
                        <Testimony 
                            photo='https://image1.masterfile.com/getImage/NjAwLTA4MTQ1OTQ2ZW4uMDAwMDAwMDA=AAr35N/600-08145946en_Masterfile.jpg' 
                            name='David' 
                            description='I called on Jeremy, a young man, to renovate the attic of my house. He was very professional and fast in the realization of these services.'
                        />
                    </div>
                </section>
            </div>
        </div>
    )
};

export default styled(Home)`
    > .nav {
        display: flex;
        justify-content: space-between;
        padding: 12px;
        > h2 {
            margin: 0;
        }
        > .links {
            > a {
                font-size: 1rem;
                padding: 2px 20px;
                text-align: center;
                display: inline-block;
                border: 2px solid black;
                border-radius: 4px;
                font-family: sourcesanspro-regular,Arial,Helvetica,sans-serif;
                color: #000;
                background: transparent;
                margin-right: 10px;
            }
        }
    }

    > .image {
        position: relative;
        > img {
            width: 100%;
            height: auto;
        }
        > div {
            padding: 1rem;
            position: absolute;
            top: 48%;
            width: 40%;
            > span {
                > h1 {
                    color: #000;
                    font-weight: 700;
                }
            }
            
        }
    }

    > .container {
        max-width: 1446px;
        margin: auto;
        padding: 0 84px;
        > section {
            > .key_figure {
                display: flex;
                justify-content: space-between;
                gap: 16px;
                > div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #dcdde2;
                    border-radius: 4px;
                    padding: 24px 12px;
                    width: 100%;
                    height: auto;
                    > h3 {
                        color: #fff;
                        font-weight: 700;
                    }
                }
            }
            > .cards, .testimonials {
                display: flex;
                justify-content: space-between;
                flex-direction: start;
                margin-bottom: 16px;
                gap: 24px;
            }

            > div {
                @media (max-width: 768px) {
                    flex-direction: column;
                }
            }
        }

        @media (max-width: 768px) {
            width: 100%;
            padding: 0 16px;
        }
    }
`;

