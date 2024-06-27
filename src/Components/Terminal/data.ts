import {
    SiAmazon,
    SiCss3,
    SiDocker,
    SiGit,
    SiGithub,
    SiGooglecloud,
    SiHtml5,
    SiInsomnia,
    SiJavascript,
    SiLinux,
    SiMariadb,
    SiMicrosoft,
    SiMicrosoftazure,
    SiMongodb,
    SiMysql,
    SiNetlify,
    SiNginx,
    SiNodedotjs,
    SiPostgresql,
    SiPrettier,
    SiReact,
    SiRedux,
    SiSass,
    SiSpotify,
    SiSqlite,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiWebpack,
} from 'react-icons/si';
import { IconItem } from '../../interfaces';

import styled from 'styled-components';

export const StyledSiTypescript = styled(SiTypescript)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #007acc;
    }
`;

export const StyledSiNodedotjs = styled(SiNodedotjs)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #3c873a;
    }
`;

export const StyledSiJavascript = styled(SiJavascript)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #f0db4f;
    }
`;

export const StyledSiReact = styled(SiReact)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #61dafb;
    }
`;

export const StyledSiWebpack = styled(SiWebpack)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #8dd6f9;
    }
`;

export const StyledSiRedux = styled(SiRedux)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #764abc;
    }
`;

export const StyledSiHtml5 = styled(SiHtml5)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #e34c26;
    }
`;

export const StyledSiCss3 = styled(SiCss3)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #2965f1;
    }
`;

export const StyledSiSass = styled(SiSass)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #cc6699;
    }
`;

export const StyledSiStyledcomponents = styled(SiStyledcomponents)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #db7093;
    }
`;

export const StyledSiPrettier = styled(SiPrettier)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #f7b93e;
    }
`;

export const StyledSiTailwindcss = styled(SiTailwindcss)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #38b2ac;
    }
`;

export const StyledSiNginx = styled(SiNginx)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #009639;
    }
`;

export const StyledSiGooglecloud = styled(SiGooglecloud)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #4285f4;
    }
`;

export const StyledSiAzuredevops = styled(SiMicrosoftazure)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #0078d7;
    }
`;

export const StyledSiAmazon = styled(SiAmazon)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #ff9900;
    }
`;

export const StyledSiVercel = styled(SiVercel)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #000000;
    }
`;

export const StyledSiNetlify = styled(SiNetlify)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #00c7b7;
    }
`;

export const StyledSiMongodb = styled(SiMongodb)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #47a248;
    }
`;

export const StyledSiSqlite = styled(SiSqlite)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #003b57;
    }
`;

export const StyledSiPostgresql = styled(SiPostgresql)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #336791;
    }
`;

export const StyledSiMysql = styled(SiMysql)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #00758f;
    }
`;

export const StyledSiDocker = styled(SiDocker)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #2496ed;
    }
`;

export const StyledSiMariadb = styled(SiMariadb)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #003545;
    }
`;

export const StyledSiGit = styled(SiGit)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #f05032;
    }
`;

export const StyledSiGithub = styled(SiGithub)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #0078d4;
    }
`;

export const StyledSiMicrosoft = styled(SiMicrosoft)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #0078d4;
    }
`;

export const StyledSiSpotify = styled(SiSpotify)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #1db954;
    }
`;

export const StyledSiInsomnia = styled(SiInsomnia)`
    color: white;
    transition: 0.3s;
    &:hover {
        color: #5849be;
    }
`;

export const languagesObj: IconItem[] = [
    { name: 'TypeScript', Icon: StyledSiTypescript },
    { name: 'Node.js', Icon: StyledSiNodedotjs },
    { name: 'JavaScript', Icon: StyledSiJavascript },
];
export const frameworksObj: IconItem[] = [
    { name: 'React', Icon: StyledSiReact },
    { name: 'Redux', Icon: StyledSiRedux },
    { name: 'Sass', Icon: StyledSiSass },
    { name: 'StyledComponents', Icon: StyledSiStyledcomponents },
    { name: 'HTML', Icon: StyledSiHtml5 },
    { name: 'CSS', Icon: StyledSiCss3 },
];
export const hostingObj: IconItem[] = [
    { name: 'AWS', Icon: StyledSiAmazon },
    { name: 'GoogleCloud', Icon: StyledSiGooglecloud },
    { name: 'Azure', Icon: StyledSiAzuredevops },
    { name: 'Vercel', Icon: StyledSiVercel },
    { name: 'Nginx', Icon: StyledSiNginx },
    { name: 'Netlify', Icon: StyledSiNetlify },
];

export const databasesObj: IconItem[] = [
    { name: 'MongoDB', Icon: StyledSiMongodb },
    { name: 'MariaDB', Icon: StyledSiMariadb },
    { name: 'MySQL', Icon: StyledSiMysql },
    { name: 'PostgreSQL', Icon: StyledSiPostgresql },
];

export const sistemasEferramentasObj: IconItem[] = [
    { name: 'Linux', Icon: SiLinux },
    { name: 'Windows', Icon: StyledSiMicrosoft },
    { name: 'Docker', Icon: StyledSiDocker },
    { name: 'Git', Icon: StyledSiGit },
    { name: 'Insomnia', Icon: StyledSiInsomnia },
    { name: 'Spotify', Icon: StyledSiSpotify },
];
