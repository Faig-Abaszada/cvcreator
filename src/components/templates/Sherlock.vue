<template>
  <div class="resume resume-doc" id="template">
    <div id="resume-header">
      <div id="header-left">
        <h2 id="position">{{ resume.personalDetailsSec.jobTitle }}</h2>
        <h1 id="name">{{ resume.personalDetailsSec.firstName }} {{ resume.personalDetailsSec.lastName }}</h1>
        <div id="info-flex">
                <span id="email">
                  <a >
                    {{ resume.personalDetailsSec.email }}
                  </a>
                </span>
                 <span id="phone">{{ resume.personalDetailsSec.phone }}</span>
<!--          <span id="github"><a href="#"><i></i> faik@github </a></span>-->
        </div>
      </div>
      <div id="header-right">
        <div id="headshot">
<!--          <img :src="`data:image/jpeg;base64,${this.resume.resumePhotoFile}`" alt="">-->
          <img :src="`data:image/jpeg;base64,${this.resume.resumePhotoFile}`" alt="">
        </div>
      </div>
    </div>
    <div id="resume-body">
      <div id="experience-container">
        <h2 id="experience-title">Experience</h2>
        <div class="spacer"></div>

<!--        experience donguye girmelidir-->
        <div class="experience" v-for="(experience, index) in resume.employmentHistorySec.employmentHistories" :key="index">
          <h2 class="company">{{experience.employer}}</h2>
          <p class="job-info"><span class="job-title">{{experience.position}} | </span><span class="experience-timeperiod">January 2015 - December 2015</span></p>
          <p class="job-description" >{{experience.city}}</p>
<!--          <ul v-if="experience.list" >-->
<!--            <li v-for="(item, index) in experience.list" :key="index">-->
<!--                      <span class="list-item-black">-->
<!--                        {{item}}-->
<!--                      </span>-->
<!--            </li>-->
<!--          </ul>-->
        </div>
<!--        -->

      </div>
      <div id="education-container">
        <h2 id="education-title">Education</h2>
        <div class="spacer"></div>
<!--        education donguye girmelidir-->
        <div class="education" v-for="education in resume.educationSec.educations" :key="education.degree">
          <h2 class="education-description">{{education.description}}</h2>
          <p><span class="degree">{{education.degree}} | </span><span class="education-timeperiod">March 2012 - December 2013</span></p>
        </div>
<!--        -->
      </div>

      <div id="personal-container">
        <h2 id="personal-title">{{ resume.personalDetailsSec.sectionTitle }}</h2>
        <div class="spacer"></div>
        <p id="personal-description">Also proficient in Adobe Photoshop and Illustrator, grew up bilingual (English and Klingon).</p>
        <ul id="personal-list">

<!--          skills donguye girmelidir-->
          <li class="skill">
                  <span class="list-item-black">
                    {{ resume.personalDetailsSec.country}} <br>
                    {{ resume.personalDetailsSec.city}} <br>
                    {{ resume.personalDetailsSec.address}} <br>
                    {{ resume.personalDetailsSec.postalCode}} <br>
                  driving license  {{ resume.personalDetailsSec.drivingLicense}} <br>
                    {{ resume.personalDetailsSec.nationality}} <br>
                    {{ resume.personalDetailsSec.placeOfBirth}} <br>
                    {{ resume.personalDetailsSec.dateOfBirth}} <br>
                  </span>
          </li>
<!--          -->

        </ul>
      </div>
      <div id="skills-container">
        <h2 id="skills-title">{{ resume.skillsSec.sectionTitle }}</h2>
        <div class="spacer"></div>
        <p id="skill-description">Also proficient in Adobe Photoshop and Illustrator, grew up bilingual (English and Klingon).</p>
        <ul id="skill-list">

          <!--          skills donguye girmelidir-->
          <li class="skill" v-for="skill in resume.skillsSec.skills" :key="skill.name">
                  <span class="list-item-black">
                    {{skill.name}} <br>
                    {{skill.level}}

                  </span>

          </li>
          <!--          -->

        </ul>
      </div>
    </div>
    <div id="resume-footer">
      <div>
        <h2>{{resume.professionalSummarySec.sectionTitle}}</h2>
        <p v-html="resume.professionalSummarySec.summaryHTML"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Sherlock',
  // props: ['resume'],
  computed: {
    ...mapFields([
        'resume',
        'resumePhotoFile'
    ])

  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.resume-doc {
  width: 21cm;
  min-height: 29.7cm;
  //width: 2480px;
  //height: 3508px;
  //height: 842pt;
  //width: 595pt;
  //595 X 842
  //width: 595px;
  //height: 842px;
  background-color: #ffffff;
}

#template {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

  h1, h2 {
    /*font-family:'Open Sans Condensed', sans-serif;*/
    margin: 0;
    color: #680568;
  }

  p {
    margin: 0;
    font-size: 12px;
  }

  ul li {
    color: #680568;
    font-size: 12px;
  }

  a {
    color: #FFF;
    text-decoration: none;
  }

  .list-item-black {
    color: black;
  }

  #resume-header {
    color: white;
    height: 180px;
    background-color: purple;
    box-shadow: inset 0px 0px 200px #301030;
    padding: 40px 100px 25px;

    #header-left {
      /*width: 465px;*/
      width: 100%;
      float: left;

      h1 {
        font-size: 56px;
        color: white;
        text-transform: uppercase;
        line-height: 56px;
      }

      h2 {
        font-size: 22px;
        color: white;
      }

      #info-flex {
        display: flex;
        margin-top: 20px;
        font-size: 14px;

        span {
          margin-right: 25px;
        }

        i {
          margin-right: 5px;
        }
      }
    }

    #header-right {
      width: 125px;
      float: right;


      img {
        width: 150px;

      }

    }

    #resume-body {
      padding: 40px 100px;

      #experience-title, #education-title, #skills-title {
        font-size: 26px;
        text-transform: uppercase;
      }

      .experience {
        margin: 10px 0 10px 50px;

        ul {
          margin: 5px 0 0 0;
        }
      }

      .company, .education-description {
        font-size: 20px;
      }

      .job-info {
        margin-bottom: 5px;
      }


      .job-title, .degree {
        font-weight: 700;
        color: #680568;
        font-size: 16px;
      }

      .experience-timeperiod, .education-timeperiod {
        font-weight: 100;
        color: #680568;
        font-size: 16px;
      }

      .education {
        margin: 10px 0 10px 50px;
      }

      #skill-list {
        column-count: 3;
        list-style-position: inside;

        ul li {
          font-size: 14px;
        }
      }

      #education-container, #skills-container {
        margin-top: 20px;
      }
    }

    #resume-footer {
      padding: 20px 100px;
      height: 135px;
      background-color: purple;
      box-shadow: inset 0px 0px 100px #301030;
      box-sizing: border-box;
      position: absolute;
      bottom: 0px;
      width: 100%;

      h2, p {
        color: white;
      }
    }
  }

  .spacer {
    width: 100%;
    border-bottom: 1px solid #680568;
    margin: 5px 0 10px;

  }
}
</style>
