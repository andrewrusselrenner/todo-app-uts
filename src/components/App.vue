<template>
  <Page>
    <ActionBar title="Mutohar Rizky - 20182110108" />
    <ScrollView>
      <StackLayout>
        <GridLayout columns="*" rows="2*, *">
          <StackLayout>
            <Label class="message" text="ToDo App" col="0" row="2" />
            <TextField returnKeyType="done" v-model="textList" hint="Apa agendamu hari ini?" @returnPress="newTodo()" />
          </StackLayout>
          <!-- untuk refresh dengan tarik kebawah -->
        </GridLayout>

        <RadListView ref="listView" class="list-group" for="list in lists" style="height: 100%;" @itemTap="todochecked">
          <v-template>
            <StackLayout oritentation="vertical" :class="list.done ? 'sudah' : ''">
              <FlexboxLayout flexDirection="row" class="list-group-item">
                <!-- <CheckBox :id="`checkbox${list.id}`" :checked="list.done" @checkedChange="todochecked(list, $event)" /> -->
                <Label :text="list.text" style="width: 100%;font-size: 17" />
              </FlexboxLayout>
            </StackLayout>
          </v-template>
        </RadListView>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      textList: "",
    };
  },
  computed: {
    lists() {
      return this.$store.state.list;
    },
  },
  methods: {
    todochecked({ item }) {
      try {
        this.$store.commit("toggle", item);
        this.$refs.listView.nativeView.refresh();
      } catch (e) {
        console.log(e);
      }
    },
    refreshTodoLists({ object }) {
      // var pullRefresh = args.object;
      console.log("pullingg.....");
      this.$nextTick(() => {
        this.lists;
        object.notifyPullToRefreshFinished();
      });
    },
    newTodo() {
      var val = this.textList;

      this.$store.commit("tambah", val);
      this.textList = "";
      // this.$refs.todolists.nativeView.refresh();
    },
  },
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

.sudah {
  background-color: #53ba82;
  color: #ffffff;
}
</style>
