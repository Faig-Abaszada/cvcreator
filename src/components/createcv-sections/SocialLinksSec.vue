<template>
  <div class="section">
    <div class="section-header">
      <h2 class="title">
        <MoveIcon class="icon move-icon" />Websites & Social Links<EditIcon
          class="icon"
        />
      </h2>
      <h4 class="subtitle">
        You can add links to websites you want hiring managers to see! Perhaps
        it will be a link to you portfolio. LinkedIn profile.
      </h4>
    </div>
    <div class="section-inner">
      <LinksItem />
    </div>
    <button class="btn"><PlusIcon class="icon" /> Add link</button>
  </div>
</template>
<script>
import EditIcon from '../../assets/Icons/create-cv/editicon.svg';
import MoveIcon from '../../assets/Icons/create-cv/movement.svg';
import PlusIcon from '../../assets/Icons/create-cv/plus-blue.svg';

import LinksItem from '../../components/LinksItem.vue';

export default {
  components: {
    MoveIcon,
    PlusIcon,
    EditIcon,
    LinksItem,
  },
  data() {},
  methods: {},
  computed: {
    //                    data from state
    // socialLinks() {
    //   return this.$store.socialLinks.sectionTitle;
    // },
  },
};
</script>
<style lang="scss">
</style>