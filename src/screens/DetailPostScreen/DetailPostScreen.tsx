import React, { Component} from 'react';
import images from '../../config/images';
import colors from 'config/colors';

const Form: React.FC = () => (
  <article>

    {/* 表紙 */}
    <section>

      <div style={{flex: 1,width: '80%', height: 450,margin: 'auto',marginTop: 30}}>
        <img style={{width: '100%', height: 450}} src={images.sample1}/>
      </div>

      <div style={{padding: 30}}>
        <div style={{fontSize: 25}}>HAWAI</div>

        <div style={{ width: '100%'}}>
          <div style={{fontSize: 12,borderTopWidth: 1, borderTopColor: colors.red}}>
            旅行が楽しかったのでアルバムを作成しました
          </div>
        </div>
      </div>

    </section>

    {/* 敷き詰め */}
    <section style={{paddingTop: 80,textAlign: 'center'}}>
      <div style={{marginBottom: 30}}>
        <div style={{fontSize: 25}}>HAWAI</div>
        <div style={{fontSize: 12}}>旅行が楽しかったのでアルバムを作成しました</div>
      </div>


      <div style={{width: '100%',backgroundColor: 'red',height: 300}}></div>
      <div style={{width: '100%',backgroundColor: 'blue',height: 200}}></div>
    </section>

    {/* ジグザク */}
    <section style={{paddingTop: 80,textAlign: 'center'}}>
      <div style={{marginBottom: 30}}>
        <div style={{fontSize: 25}}>HAWAI</div>
        <div style={{fontSize: 12}}>旅行が楽しかったのでアルバムを作成しました</div>
      </div>

      <div style={{width: '100%',backgroundColor: 'red',height: 200,marginLeft: 20,marginBottom: 30,marginTop: 30}}></div>
      <div style={{width: '100%',backgroundColor: 'blue',height: 200,marginRight: 20,marginBottom: 30,marginTop: 30}}>

        
      </div>
    </section>

    {/* 均等スペース */}
    <section style={{paddingTop: 80,textAlign: 'center'}}>
      <div style={{marginBottom: 30}}>
          <div style={{fontSize: 25}}>HAWAI</div>
          <div style={{fontSize: 12}}>旅行が楽しかったのでアルバムを作成しました</div>
      </div>

      <div style={{width: '100%', height: 300,margin: 'auto',marginTop: 10, marginBottom: 10}}>
        <img style={{width: '100%', height: 300,backgroundSize: 'cover'}} src={images.sample1}/>
      </div>

      <div style={{width: '100%', height: 300,margin: 'auto',marginTop: 10, marginBottom: 10}}>
        <img style={{width: '100%', height: 300}} src={images.sample1}/>
      </div>

    </section>

    {/* 交互 */}
    <section style={{paddingTop: 80,textAlign: 'center'}}>

      <div style={{marginBottom: 30}}>
        <div style={{fontSize: 25}}>HAWAI</div>
        <div style={{fontSize: 12}}>旅行が楽しかったのでアルバムを作成しました</div>
      </div>

      <div style={{width: '100%',marginTop: 10,display: 'flex'}}>

        <div style={{width: '50%', backgroundColor: 'orange',height: 250,objectFit: 'cover'}}>
          <img style={{width: '100%', height: 250,objectFit: 'cover'}} src={images.sample1}/>
        </div>

        <div style={{width: '50%', backgroundColor: 'blue',height: 250 ,textAlign: 'center'}}>
          <div>HAWAI</div>
        </div>

      </div>

      <div style={{width: '100%',display: 'flex'}}>

        <div style={{width: '50%', backgroundColor: 'blue',height: 250}}></div>

        <div style={{width: '50%', backgroundColor: 'orange',height: 250,objectFit: 'cover'}}>
          <img style={{width: '100%', height: 250}} src={images.sample1}/>
        </div>

      </div>

    </section>

  </article>
);



export default Form;