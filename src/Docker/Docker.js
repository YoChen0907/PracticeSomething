import React from 'react';

import './Docker.css';

import docker_images from './docker-images.png';
import docker_ps from './docker-ps.png';

function Docker() {
    return (
        <div className="Docker">
            Docker
            <div className="docker-block">
                docker 介紹
            </div>
            <div className="docker-block">
                docker 安裝
                <p>Mac</p>
                <pre className="command-line-bolck">
                    brew cask install docker
                </pre>
                驗證安裝
                <pre className="command-line-bolck">
                    docker ps
                </pre>
                <img alt="docker-ps" src={docker_ps} style={{ width: '50%' }}/>
            </div>
            <div className="docker-block">
                docker 基礎使用
                <pre className="command-line-bolck">
                    docker images
                </pre>
                <img alt="docker-images" src={docker_images} style={{ width: '50%' }} />
                <pre className="command-line-bolck">
                    docker rm -vf $(docker ps -aq)
                </pre>
                container全砍
                <pre className="command-line-bolck">
                    docker run --rm -it -p 8080:80 -v `pwd`/my-web.html:/usr/share/nginx/html/my-web.html nginx
                </pre>
                在 8080 開一個nginx 並建立my-web.html, 在本機的my-web.html對應到docker內的my-web.html
                <br />
                註釋：pwd 為 現在所在位置
            </div>
        </div>
    )
}

export default Docker;
