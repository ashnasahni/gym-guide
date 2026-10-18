(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={"machine-chest-press":{id:`machine-chest-press`,name:`Machine Chest Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`chest-press`],setup:[`Set the seat so the handles line up with the middle of your chest.`,`Sit with your back and head flat against the pad, feet flat on the floor.`],steps:[`Grip the handles and press them forward until your arms are almost straight.`,`Bring them back slowly, about 2 seconds, until you feel a light stretch in your chest.`],mistakes:[`Seat too low, so your shoulders do the work instead of your chest.`,`Letting the weight stack slam between reps.`],stress:{shoulders:`moderate`},video:{youtubeId:`B-zyH8OTlsg`,channel:`Hammer Fitness`}},"dumbbell-bench-press":{id:`dumbbell-bench-press`,name:`Dumbbell Bench Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit on the end of a flat bench with dumbbells on your thighs.`,`Lie back, bringing the dumbbells to the sides of your chest.`],steps:[`Press both dumbbells up until your arms are straight above your chest.`,`Lower slowly until your elbows are a little below the bench.`],mistakes:[`Elbows flared straight out to the sides — keep them at about 45° from your body.`,`Arching your lower back off the bench.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`sTYWWaunX8o`,channel:`Born Fitness`}},"incline-dumbbell-press":{id:`incline-dumbbell-press`,name:`Incline Dumbbell Press`,muscles:`Upper chest, front shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline, about 30°.`,`Sit back with a dumbbell at each shoulder.`],steps:[`Press up and slightly in until your arms are straight.`,`Lower slowly back to shoulder level.`],mistakes:[`Bench set too steep, which turns it into a shoulder exercise.`,`Bouncing the weights at the bottom.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`c1ZX5ZXMQVk`,channel:`Vivian Ngo`}},"pec-deck-fly":{id:`pec-deck-fly`,name:`Pec Deck Fly`,muscles:`Chest`,equipment:[`pec-deck`],setup:[`Set the seat so the handles are at chest height.`,`Set the arms so you start with a comfortable stretch, not a deep one.`],steps:[`With a slight bend in your elbows, bring the handles together in front of you.`,`Squeeze for a second, then open slowly.`],mistakes:[`Starting with the arms pulled too far back.`,`Shrugging your shoulders up toward your ears.`],stress:{shoulders:`moderate`},video:{youtubeId:`hZ0CGRaKwbQ`,channel:`Hammer Fitness`}},"cable-fly":{id:`cable-fly`,name:`Cable Chest Fly`,muscles:`Chest`,equipment:[`cable`],setup:[`Set both pulleys at shoulder height with single handles.`,`Step forward into a split stance.`],steps:[`With soft elbows, bring the handles together in front of your chest.`,`Open back out slowly until your hands are in line with your chest.`],mistakes:[`Bending and straightening your elbows — it should be a hug, not a press.`],stress:{shoulders:`moderate`},video:{youtubeId:`pJDbn8Kyx0o`,channel:`StrengthLog`}},"machine-shoulder-press":{id:`machine-shoulder-press`,name:`Machine Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`shoulder-press`],setup:[`Set the seat so the handles start at about shoulder height.`,`Sit with your back flat against the pad.`],steps:[`Press the handles up until your arms are almost straight.`,`Lower slowly back to shoulder height.`],mistakes:[`Arching your lower back off the pad.`,`Pushing your head forward.`],stress:{shoulders:`moderate`},video:{youtubeId:`e5gJP7quyGk`,channel:`Vivian Ngo`}},"seated-dumbbell-shoulder-press":{id:`seated-dumbbell-shoulder-press`,name:`Seated Dumbbell Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench upright with your back supported.`,`Hold a dumbbell at each shoulder, palms forward.`],steps:[`Press up until your arms are straight overhead.`,`Lower slowly back to your shoulders.`],mistakes:[`Leaning back and arching to push heavier weight.`],stress:{shoulders:`moderate`,lowerBack:`moderate`},video:{youtubeId:`fuQpuu--bMI`,channel:`That Fit Friend`}},"dumbbell-lateral-raise":{id:`dumbbell-lateral-raise`,name:`Seated Lateral Raise`,muscles:`Side shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench holding light dumbbells at your sides.`],steps:[`Raise your arms out to the side until they are level with your shoulders.`,`Lower slowly over about 2 seconds.`],mistakes:[`Shrugging — keep your shoulders pressed down, away from your ears.`,`Going too heavy and swinging the weights up.`],stress:{neckUpperBack:`moderate`},video:{youtubeId:`yKAxVcU3nfw`,channel:`Vivian Ngo`}},"cable-tricep-pushdown":{id:`cable-tricep-pushdown`,name:`Cable Tricep Pushdown`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley high with a rope or straight bar.`,`Stand close with your elbows tucked at your sides.`],steps:[`Push down until your arms are straight, without moving your elbows.`,`Let it rise slowly back to about chest height.`],mistakes:[`Elbows drifting forward.`,`Leaning your whole body over the bar.`],stress:{},video:{youtubeId:`d-ySLTHUgQA`,channel:`Vivian Ngo`}},"overhead-cable-extension":{id:`overhead-cable-extension`,name:`Overhead Cable Tricep Extension`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley low with a rope.`,`Face away from the machine, rope behind your head.`],steps:[`Straighten your arms overhead.`,`Bend your elbows slowly to lower the rope behind your head.`],mistakes:[`Elbows flaring wide.`,`Arching your lower back.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`mRozZKkGIfg`,channel:`Bodybuilding.com`}},"assisted-dip":{id:`assisted-dip`,name:`Assisted Dip`,muscles:`Triceps, chest`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the dip handles.`],steps:[`Lower until your elbows are at about 90°.`,`Push back up to straight arms.`],mistakes:[`Going too deep, which strains the front of the shoulder.`],stress:{shoulders:`high`,wrists:`moderate`},video:{youtubeId:`slD5hhM_thg`,channel:`UMW Campus Recreation`},weightKind:`assist`},"lat-pulldown":{id:`lat-pulldown`,name:`Lat Pulldown`,muscles:`Upper back (lats), biceps`,equipment:[`lat-pulldown`],setup:[`Set the knee pad so your thighs are snug underneath it.`,`Grip the bar a little wider than your shoulders.`],steps:[`Pull the bar down to your upper chest, leading with your elbows.`,`Let it rise slowly until your arms are straight.`],mistakes:[`Pulling the bar behind your neck — always pull to the front.`,`Leaning far back and using momentum.`],stress:{wrists:`moderate`},video:{youtubeId:`oMJmAHRZXBk`,channel:`UC Davis Health`}},"assisted-pullup":{id:`assisted-pullup`,name:`Assisted Pull-Up`,muscles:`Upper back (lats), biceps`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the top handles.`],steps:[`Pull yourself up until your chin is over the handles.`,`Lower slowly to straight arms.`],mistakes:[`Craning your neck to get your chin over.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`fnHeovkmkkk`,channel:`Fitness 19`},weightKind:`assist`},"chest-supported-row":{id:`chest-supported-row`,name:`Chest-Supported Dumbbell Row`,muscles:`Mid back, rear shoulders, biceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline and lie face down on it, chest on the pad.`,`Let a dumbbell hang straight down from each hand.`],steps:[`Pull the dumbbells up toward your hips, squeezing your shoulder blades together.`,`Lower slowly until your arms are straight.`],mistakes:[`Lifting your chest off the pad.`,`Shrugging the weights up instead of rowing.`],stress:{},video:{youtubeId:`Nx0TzjgsI-0`,channel:`PureGym`}},"seated-cable-row":{id:`seated-cable-row`,name:`Seated Cable Row`,muscles:`Mid back, biceps`,equipment:[`seated-row`],setup:[`Sit with feet on the footplates and knees slightly bent.`,`Grip the handle and sit up tall.`],steps:[`Pull the handle to your belly button, squeezing your shoulder blades together.`,`Let your arms straighten slowly without rounding your back.`],mistakes:[`Rocking your torso back and forth.`,`Rounding your lower back as the handle goes forward.`],stress:{lowerBack:`moderate`},video:{youtubeId:`oFtfkSElE0s`,channel:`Hammer Fitness`}},"face-pull":{id:`face-pull`,name:`Cable Face Pull`,muscles:`Rear shoulders, upper back`,equipment:[`cable`],setup:[`Set the pulley at about face height with a rope.`,`Hold the rope ends with thumbs pointing back.`],steps:[`Pull the rope toward your face, splitting the ends apart beside your ears.`,`Return slowly with control.`],mistakes:[`Going heavy — this is a light, controlled exercise.`,`Shrugging toward your ears.`],stress:{},video:{youtubeId:`eTCBSFlCJ_s`,channel:`NASM`}},"reverse-pec-deck":{id:`reverse-pec-deck`,name:`Reverse Pec Deck`,muscles:`Rear shoulders, upper back`,equipment:[`pec-deck`],setup:[`Sit facing the pad, chest against it.`,`Set the handles so your arms start in front of you.`],steps:[`With slightly bent elbows, open your arms out to the side.`,`Return slowly.`],mistakes:[`Shrugging your shoulders up.`,`Swinging the weight.`],stress:{},video:{youtubeId:`v0rJuhEa59c`,channel:`FIT.nl`}},"dumbbell-curl":{id:`dumbbell-curl`,name:`Seated Dumbbell Curl`,muscles:`Biceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench with a dumbbell in each hand, palms forward.`],steps:[`Curl the weights up, keeping your elbows at your sides.`,`Lower slowly to straight arms.`],mistakes:[`Swinging your body to lift the weight.`,`Elbows drifting forward.`],stress:{wrists:`moderate`},video:{youtubeId:`SW5JS2Wf2uQ`,channel:`Horton Barbell`}},"cable-curl":{id:`cable-curl`,name:`Cable Curl`,muscles:`Biceps`,equipment:[`cable`],setup:[`Set the pulley low with a straight bar.`,`Stand close with elbows at your sides.`],steps:[`Curl the bar up toward your shoulders.`,`Lower slowly.`],mistakes:[`Leaning back to help the weight up.`],stress:{wrists:`moderate`},video:{youtubeId:`0TtZgAuC8Vw`,channel:`Holly Perkins`}},"hammer-curl":{id:`hammer-curl`,name:`Seated Hammer Curl`,muscles:`Biceps, forearms`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright with dumbbells at your sides, palms facing each other.`],steps:[`Curl up keeping your palms facing each other.`,`Lower slowly.`],mistakes:[`Swinging the weights.`],stress:{},video:{youtubeId:`bdlqQAVdcEk`,channel:`Vivian Ngo`}},"leg-press":{id:`leg-press`,name:`Leg Press`,muscles:`Thighs, glutes`,equipment:[`leg-press`],setup:[`Sit back with your lower back flat against the pad.`,`Feet shoulder-width apart, in the middle or slightly high on the platform.`],steps:[`Release the safety handles and lower the platform slowly.`,`Stop when your knees reach about 90°, before your lower back starts to lift off the pad.`,`Push back up through your whole foot, without locking your knees.`],mistakes:[`Going so deep your hips curl up off the seat.`,`Knees caving inward — keep them pointing the same way as your toes.`],stress:{knees:`moderate`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`90NY9tka1TQ`,channel:`Vivian Ngo`}},"barbell-back-squat":{id:`barbell-back-squat`,name:`Barbell Back Squat`,muscles:`Thighs, glutes, core`,equipment:[`squat-rack`],setup:[`Set the bar at upper-chest height.`,`Step under it and rest it across your upper back.`],steps:[`Squat down until your thighs are about parallel to the floor.`,`Drive back up through your feet.`],mistakes:[`Knees caving in.`,`Rounding your back at the bottom.`],stress:{knees:`high`,lowerBack:`high`,neckUpperBack:`moderate`,feet:`moderate`},video:{youtubeId:`8PMjqgR8Wa8`,channel:`Barbell Rehab`}},"goblet-squat":{id:`goblet-squat`,name:`Goblet Squat`,muscles:`Thighs, glutes`,equipment:[`dumbbells`],setup:[`Hold one dumbbell upright against your chest.`,`Feet slightly wider than shoulders, toes turned out a little.`],steps:[`Sit down between your heels, keeping your chest up.`,`Stand back up.`],mistakes:[`Heels lifting off the floor.`,`Knees caving in.`],stress:{knees:`high`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`zsN2WvklwDk`,channel:`Janice Liang`}},"glute-bridge":{id:`glute-bridge`,name:`Dumbbell Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[`dumbbells`,`mat`],setup:[`Lie on your back on a mat, knees bent, feet flat and hip-width apart.`,`Rest a dumbbell across your hips and hold it in place.`],steps:[`Squeeze your glutes and lift your hips until your body is straight from knees to shoulders.`,`Hold for a second, then lower slowly.`],mistakes:[`Arching your lower back at the top — the lift should come from your glutes.`],stress:{},video:{youtubeId:`PSMW7iSi2BU`,channel:`Holly Perkins`}},"dumbbell-romanian-deadlift":{id:`dumbbell-romanian-deadlift`,name:`Dumbbell Romanian Deadlift`,muscles:`Hamstrings, glutes`,equipment:[`dumbbells`],setup:[`Stand holding dumbbells in front of your thighs, knees slightly bent.`],steps:[`Push your hips back and lower the weights along your legs, back flat.`,`Stand back up by squeezing your glutes.`],mistakes:[`Rounding your back.`,`Turning it into a squat by bending your knees a lot.`],stress:{lowerBack:`high`},video:{youtubeId:`dNQucsVf90I`,channel:`Vivian Ngo`}},"seated-leg-curl":{id:`seated-leg-curl`,name:`Leg Curl`,muscles:`Hamstrings`,equipment:[`leg-curl`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit just above your heels.`],steps:[`Bend your knees to pull the pad down and back.`,`Return slowly to almost straight.`],mistakes:[`Letting the weight snap your legs straight.`,`Lifting your hips to cheat the weight.`],stress:{knees:`moderate`},video:{youtubeId:`_2Kd0d-JEUM`,channel:`NASM`}},"hip-abduction":{id:`hip-abduction`,name:`Hip Abduction Machine`,muscles:`Outer glutes`,equipment:[`hip-abduction`],setup:[`Sit with your back against the pad, pads on the outside of your knees.`],steps:[`Push your knees outward.`,`Return slowly without letting the weights touch.`],mistakes:[`Rocking your body to move the weight.`],stress:{},video:{youtubeId:`5O_Y9l__iao`,channel:`Hammer Fitness`}},"leg-extension":{id:`leg-extension`,name:`Leg Extension`,muscles:`Front of thighs`,equipment:[`leg-extension`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit on your lower shins.`],steps:[`Straighten your legs.`,`Lower slowly.`],mistakes:[`Kicking the weight up fast.`],stress:{knees:`high`},video:{youtubeId:`MXvSzXEBOTI`,channel:`Steev`}},"dead-bug":{id:`dead-bug`,name:`Dead Bug`,muscles:`Deep core`,equipment:[`mat`],setup:[`Lie on your back with arms pointing up and knees bent at 90° above your hips.`],steps:[`Press your lower back gently into the mat.`,`Slowly lower one arm and the opposite leg toward the floor, then return. Switch sides.`],mistakes:[`Letting your lower back lift off the mat — make the movement smaller if it does.`],stress:{},video:{youtubeId:`bxn9FBrt4-A`,channel:`NASM`},weightKind:`bodyweight`},"pallof-press":{id:`pallof-press`,name:`Cable Pallof Press`,muscles:`Core, obliques`,equipment:[`cable`],setup:[`Set a cable at chest height with a single handle.`,`Stand side-on to the machine, holding the handle at your chest with both hands.`],steps:[`Press the handle straight out in front of you without letting it pull you sideways.`,`Hold for 2 seconds, bring it back. Do both sides.`],mistakes:[`Twisting toward the machine.`],stress:{},video:{youtubeId:`SY5lRzBPtM4`,channel:`Fitness Lab`}},"cable-crunch":{id:`cable-crunch`,name:`Cable Crunch`,muscles:`Abs`,equipment:[`cable`],setup:[`Set the pulley high with a rope.`,`Kneel facing the machine, rope beside your head.`],steps:[`Crunch down, bringing your elbows toward your knees.`,`Rise back up slowly.`],mistakes:[`Pulling with your arms instead of your abs.`,`Yanking your neck forward.`],stress:{lowerBack:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`0KEP6A1deBE`,channel:`Travis Tarrant`}},"side-plank":{id:`side-plank`,name:`Side Plank`,muscles:`Obliques, core`,equipment:[`mat`],setup:[`Lie on your side, propped up on your forearm, elbow under your shoulder.`],steps:[`Lift your hips so your body is a straight line.`,`Hold for 20–30 seconds. Switch sides.`],mistakes:[`Hips sagging toward the floor.`],stress:{shoulders:`moderate`},video:{youtubeId:`0M-erHBl48U`,channel:`Heal Fit Physio`},weightKind:`bodyweight`,timedSeconds:{min:20,max:30}}},t={"home-dead-bug":{...e[`dead-bug`],id:`home-dead-bug`,equipment:[]},"home-side-plank":{...e[`side-plank`],id:`home-side-plank`,equipment:[]},"bird-dog":{id:`bird-dog`,name:`Bird Dog`,muscles:`Deep core, lower back, glutes`,equipment:[],setup:[`Kneel on all fours on a mat, towel, or carpet, with your hands under your shoulders and your knees under your hips.`,`Keep your back flat and your neck long, eyes on the floor.`],steps:[`Tighten your belly and slowly reach one arm forward and the opposite leg straight back.`,`Hold for a second without letting your hips tilt or your back sag.`,`Bring them back with control, then switch sides.`],mistakes:[`Arching your lower back as the leg lifts: only raise it as high as your back stays flat.`,`Rushing and swinging the arm and leg.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`KA0ekfSePrQ`,channel:`Tone and Tighten`},weightKind:`bodyweight`},"forearm-plank":{id:`forearm-plank`,name:`Forearm Plank`,muscles:`Abs, shoulders, glutes`,equipment:[],setup:[`Lie face down, then prop yourself up on your forearms with your elbows right under your shoulders.`,`Tuck your toes and lift your hips so your body makes one straight line.`],steps:[`Squeeze your glutes and brace your abs, as if bracing for a light punch.`,`Breathe steadily and hold. Stop when your form starts to slip.`,`Lower your knees to rest.`],mistakes:[`Letting your hips sag so your lower back arches.`,`Piking your hips up, which takes the work off your abs.`,`Holding your breath or craning your neck up.`],stress:{lowerBack:`moderate`,shoulders:`moderate`},video:{youtubeId:`gSDNblPRh1U`,channel:`Masterpiece Training`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"home-glute-bridge":{id:`home-glute-bridge`,name:`Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[],setup:[`Lie on your back with your knees bent and your feet flat on the floor, hip-width apart.`,`Rest your arms at your sides, palms down.`],steps:[`Press your lower back gently toward the floor, then push through your heels to lift your hips.`,`Stop when your shoulders, hips and knees make a straight line, and squeeze your glutes.`,`Lower slowly.`],mistakes:[`Lifting so high that your lower back arches: the lift should come from your glutes.`,`Pushing through your toes instead of your heels.`],stress:{},video:{youtubeId:`evOnUDkq9f4`,channel:`Girls Gone Strong`},weightKind:`bodyweight`},"bicycle-crunch":{id:`bicycle-crunch`,name:`Bicycle Crunch`,muscles:`Abs, obliques`,equipment:[],setup:[`Lie on your back with your hands lightly behind your head and your knees lifted.`,`Press your lower back gently into the floor.`],steps:[`Bring one elbow toward the opposite knee while you straighten the other leg.`,`Switch sides slowly, like pedaling a bike.`,`Keep your shoulders lifted off the floor the whole time.`],mistakes:[`Pulling on your neck with your hands: keep them light.`,`Going fast, which uses momentum instead of your abs.`,`Letting your lower back arch off the floor.`],stress:{neckUpperBack:`high`,lowerBack:`moderate`},video:{youtubeId:`eqg47ZuGZXQ`,channel:`UCLA Health`},weightKind:`bodyweight`},"mountain-climber":{id:`mountain-climber`,name:`Mountain Climber`,muscles:`Abs, shoulders, hips`,equipment:[],setup:[`Start in a high plank with your hands under your shoulders and your body in one straight line.`],steps:[`Drive one knee toward your chest, then switch legs, like running in place on the floor.`,`Keep your hips level and your core tight. Start slowly and speed up only if your form holds.`],mistakes:[`Hips bouncing up and down.`,`Letting your lower back sag.`,`Shoulders drifting behind your hands.`],stress:{knees:`high`,wrists:`moderate`,shoulders:`moderate`},video:{youtubeId:`gW-q50V6Z_0`,channel:`Born Fitness`},weightKind:`bodyweight`}},n={"chin-tuck":{id:`chin-tuck`,name:`Chin Tuck`,muscles:`Deep neck muscles`,equipment:[],setup:[`Sit or stand tall with your shoulders relaxed and your eyes looking straight ahead.`],steps:[`Slide your head straight back, as if making a double chin. Keep your chin level, not nodding down.`,`Hold for about 3 seconds, then relax.`,`Repeat slowly.`],mistakes:[`Tipping your chin down or up instead of sliding straight back.`,`Shrugging your shoulders or holding your breath.`,`Pushing into pain: go only as far as a gentle stretch.`],stress:{},video:{youtubeId:`h_1-7H0eOfo`,channel:`PhysioExercise`},weightKind:`bodyweight`},"open-book":{id:`open-book`,name:`Open Book`,muscles:`Upper back, chest, shoulders`,equipment:[],setup:[`Lie on your side with your knees bent and stacked, and your arms straight out in front with palms together.`],steps:[`Keeping your knees together, lift the top arm and open it toward the ceiling and behind you, letting your eyes follow your hand.`,`Pause for a breath, then bring it back slowly.`,`Do all your reps, then switch sides.`],mistakes:[`Letting your knees and hips roll back: the turn should come from your upper back.`,`Forcing your arm to the floor: stop where it feels comfortable.`],stress:{},video:{youtubeId:`917w2gqZwZQ`,channel:`Petroski Physio`},weightKind:`bodyweight`},"wall-slide":{id:`wall-slide`,name:`Wall Slide`,muscles:`Upper back, shoulders`,equipment:[],setup:[`Stand with your heels a few inches from a wall and press your head, upper back and hips against it.`,`Bend your elbows and rest your forearms and the backs of your hands on the wall, like a goalpost.`],steps:[`Slowly slide your arms up the wall as far as you can keep contact.`,`Slide them back down with control.`],mistakes:[`Arching your lower back or flaring your ribs to reach higher.`,`Letting your forearms leave the wall: go only as high as you can keep contact.`],stress:{shoulders:`moderate`},video:{youtubeId:`Eaj_NG5_hIo`,channel:`British Elbow & Shoulder Society`},weightKind:`bodyweight`},"cat-cow":{id:`cat-cow`,name:`Cat-Cow`,muscles:`Spine, hips`,equipment:[],setup:[`Get on your hands and knees, with your hands under your shoulders and your knees under your hips.`,`Put a folded towel or mat under your knees if the floor is hard.`],steps:[`Breathe in and let your belly drop as you gently lift your chest and tailbone.`,`Breathe out and round your back toward the ceiling, tucking your chin and tailbone.`,`Move slowly, letting your breath lead.`],mistakes:[`Forcing a bigger arch than feels good.`,`Rushing: let each breath lead the movement.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`xyNwxiuERXc`,channel:`FIT.nl`},weightKind:`bodyweight`},"figure-four-stretch":{id:`figure-four-stretch`,name:`Figure-4 Stretch`,muscles:`Glutes, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat.`,`Cross one ankle over the opposite knee to make a 4.`],steps:[`Keep your head and shoulders relaxed on the floor.`,`For more stretch, hold behind the lower thigh and draw it gently toward your chest.`,`Hold, breathing slowly, then switch sides.`],mistakes:[`Forcing the knee down.`,`Lifting your head or tensing your shoulders.`,`Stretching into sharp pain or tingling down your leg: stop if that happens.`],stress:{},video:{youtubeId:`PiJ_5AXTLOw`,channel:`Rapid Fitness`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"supine-twist":{id:`supine-twist`,name:`Lying Twist`,muscles:`Lower back, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat, arms out to the sides.`],steps:[`Let both knees fall slowly to one side while your shoulders stay on the floor.`,`Hold, breathing slowly, then bring them back and switch sides.`],mistakes:[`Letting the opposite shoulder lift off the floor.`,`Twisting past where it feels good: a pillow under your knees helps.`],stress:{},video:{youtubeId:`mNdJti7ZwKI`,channel:`Vive Health`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}}},r={...e,...t,...n},i={push:{title:`Push — chest, shoulders, triceps`,slots:[{label:`Chest`,options:[`machine-chest-press`,`dumbbell-bench-press`]},{label:`Shoulders`,options:[`machine-shoulder-press`,`seated-dumbbell-shoulder-press`]},{label:`Upper chest`,options:[`incline-dumbbell-press`,`cable-fly`,`pec-deck-fly`]},{label:`Triceps`,options:[`cable-tricep-pushdown`,`overhead-cable-extension`,`assisted-dip`]},{label:`Side shoulders`,options:[`dumbbell-lateral-raise`]},{label:`Chest squeeze`,options:[`pec-deck-fly`,`cable-fly`]}]},pull:{title:`Pull — back, biceps`,slots:[{label:`Upper back`,options:[`lat-pulldown`,`assisted-pullup`]},{label:`Mid back`,options:[`chest-supported-row`,`seated-cable-row`]},{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]},{label:`Biceps`,options:[`dumbbell-curl`,`cable-curl`]},{label:`Second back`,options:[`seated-cable-row`,`assisted-pullup`,`chest-supported-row`]},{label:`Biceps & forearms`,options:[`hammer-curl`,`cable-curl`]}]},legs:{title:`Legs + Abs`,slots:[{label:`Thighs`,options:[`leg-press`,`barbell-back-squat`,`goblet-squat`]},{label:`Glutes`,options:[`glute-bridge`,`dumbbell-romanian-deadlift`]},{label:`Hamstrings`,options:[`seated-leg-curl`,`dumbbell-romanian-deadlift`]},{label:`Core`,options:[`dead-bug`,`pallof-press`]},{label:`Outer glutes`,options:[`hip-abduction`]},{label:`Abs`,options:[`pallof-press`,`side-plank`,`cable-crunch`]},{label:`Front thighs`,options:[`leg-extension`]}]},home:{title:`At-home abs — no equipment`,slots:[{label:`Deep core`,options:[`home-dead-bug`]},{label:`Back side`,options:[`bird-dog`]},{label:`Front core`,options:[`forearm-plank`,`home-dead-bug`]},{label:`Obliques`,options:[`home-side-plank`]},{label:`Hips`,options:[`home-glute-bridge`]},{label:`Lower abs`,options:[`bicycle-crunch`,`forearm-plank`]},{label:`Challenge`,options:[`mountain-climber`,`bicycle-crunch`]}]},mobility:{title:`Mobility reset — neck, upper back, hips`,slots:[{label:`Neck`,options:[`chin-tuck`]},{label:`Upper back`,options:[`open-book`]},{label:`Shoulders`,options:[`wall-slide`]},{label:`Spine`,options:[`cat-cow`,`supine-twist`]},{label:`Hips`,options:[`figure-four-stretch`]},{label:`Lower back`,options:[`supine-twist`,`cat-cow`]}]}};function a(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function o(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function s(e){let t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t}var c=[`push`,`pull`,`legs`,`home`,`mobility`],l=[`push`,`pull`,`legs`,`home`],u=[`push`,`pull`,`legs`],d={new:4,some:5,experienced:7},f=`Pick a weight where the last 2 reps feel hard but your form stays clean.`,p={"lean-muscle":{new:{sets:3,repMin:10,repMax:12,restSeconds:90,tip:f},some:{sets:3,repMin:8,repMax:12,restSeconds:90,tip:f},experienced:{sets:4,repMin:8,repMax:12,restSeconds:90,tip:`Take the last set close to failure with good form.`}},strength:{new:{sets:3,repMin:8,repMax:10,restSeconds:120,tip:`Learn the movement before going heavy.`},some:{sets:4,repMin:6,repMax:8,restSeconds:120,tip:f},experienced:{sets:4,repMin:5,repMax:6,restSeconds:150,tip:f}},general:{new:{sets:2,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},some:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},experienced:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Keep rests short.`}}};function ee(e){return`${e.sets} sets of ${e.repMin}–${e.repMax} reps, resting about ${e.restSeconds} seconds between sets. ${e.tip}`}function m(e,t){return e.timedSeconds?{...e.timedSeconds,unit:`seconds`}:{min:t.repMin,max:t.repMax,unit:`reps`}}var h={new:{sets:2,repMin:10,repMax:12,restSeconds:45,tip:`Go slowly: quality matters more than speed.`},some:{sets:3,repMin:10,repMax:15,restSeconds:45,tip:`Go slowly and keep your lower back steady.`},experienced:{sets:3,repMin:12,repMax:20,restSeconds:30,tip:`Keep tension in your abs the whole time.`}},g={sets:2,repMin:8,repMax:10,restSeconds:15,tip:`Move slowly and stop short of any pain.`},_=`One light set of your first exercise at about half your usual weight.`,v={mobility:[`Take 5 slow breaths: in through your nose, out through your mouth, shoulders relaxed.`],home:[`Cat-cow on the floor: 10 slow reps, staying in a pain-free range.`,`Pelvic tilts: on your back with knees bent, gently flatten your lower back to the floor and release, 10 reps.`],push:[`Arm circles: 10 forward, then 10 backward.`,`Wall slides: stand with your back to a wall and slowly slide your arms up and down, 10 reps.`,_],pull:[`Arm circles: 10 forward, then 10 backward.`,`Shoulder rolls: 10 slow rolls backward.`,_],legs:[`Leg swings: hold onto something steady and swing each leg forward and back 10 times, then side to side 10 times.`,`Hip circles: hands on hips, 10 slow circles each way.`,`Bodyweight glute bridges: 10 slow reps on a mat.`,_]},y={mobility:[`Lie on your back with your knees bent and take 5 slow, deep belly breaths.`],home:[`Child's pose: sit back on your heels with your arms reaching forward and breathe slowly for 30 seconds.`,`Lying twist: on your back, let both knees fall to one side for 20–30 seconds. Each side.`,`Slow breathing: lie on your back and take 5 slow, deep belly breaths.`],push:[`Doorway chest stretch: forearm on a door frame or post, step through until you feel your chest stretch. Each side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Overhead triceps stretch: reach one hand down your back and gently press the elbow with the other hand. Each side.`],pull:[`Lat stretch: hold a post at chest height and sit your hips back until you feel it along your side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Biceps stretch: palm flat on a wall behind you at shoulder height, then turn your body away. Each side.`],legs:[`Lying hamstring stretch: on your back, lift one straight leg and hold behind the thigh. Each side.`,`Figure-4 glute stretch: on your back, cross one ankle over the other knee and pull the bottom leg in. Each side.`,`Lying quad stretch: on your side, hold your top ankle and bring your heel toward you, only as far as is comfortable. Each side.`]},b={neckUpperBack:[`Gentle neck stretch: tilt one ear toward your shoulder without pulling. Each side.`],lowerBack:[`Knees to chest: on your back, hug both knees in gently and breathe slowly.`]},x={neckUpperBack:[`Chin tucks: sit tall and gently slide your chin straight back, 10 slow reps.`,`Open books: lie on your side, knees bent, and slowly rotate your top arm open, 8 per side.`],lowerBack:[`Cat-cow on a mat: slowly round and arch your back, 10 reps, staying in a pain-free range.`],knees:[`Keep the bike seat high enough that your knee is only slightly bent at the bottom.`]},S={knees:`Go easy on your knees: use a shorter range and stop before any knee pain.`,lowerBack:`Go easy on your lower back: keep it pressed against the pad and lift lighter.`,neckUpperBack:`Go easy on your neck: keep your shoulders down and your head still.`,feet:`Go easy on your feet: keep your whole foot flat and wear supportive shoes.`,shoulders:`Go easy on your shoulders: use a smaller range and lighter weight.`,wrists:`Go easy on your wrists: keep them straight, not bent back.`};function C(e,t){return e.equipment.every(e=>t.has(e))}function w(e,t){return t.filter(t=>e.stress[t]===`moderate`)}function T(e,t){return t.some(t=>e.stress[t]===`high`)}function E(e,t,n,i){return e.options.map(e=>r[e]).filter(e=>!i.has(e.id)&&!t.avoidedExerciseIds.includes(e.id)).filter(e=>C(e,n)).filter(e=>!T(e,t.protectedAreas)).sort((e,n)=>w(e,t.protectedAreas).length-w(n,t.protectedAreas).length).map(n=>({exercise:n,slot:e,cautionAreas:w(n,t.protectedAreas)}))}function D(e,t,n,r){return E(e.slot,t,new Set(n),new Set([...r,e.exercise.id]))}function O(e,t,n){return e===`mobility`?v.mobility:e===`home`?[`2 minutes of marching in place to warm up.`,...t.protectedAreas.includes(`neckUpperBack`)?x.neckUpperBack??[]:[],...v.home]:[n?`5 minutes on the stationary bike at an easy pace.`:`5 minutes of brisk walking to warm up.`,...t.protectedAreas.flatMap(e=>x[e]??[]),...v[e]]}function te(e,t){return e===`home`?h[t.experience]:e===`mobility`?g:p[t.goal][t.experience]}function ne(e,t){return e===`mobility`?y.mobility:[...y[e],...t.protectedAreas.flatMap(e=>b[e]??[])]}function re(e,t,n){let r=new Set(n),a=i[e],o=e===`mobility`?a.slots.length:d[t.experience],s=a.slots.slice(0,o),c=new Set,l=[];for(let e of s){let[n]=E(e,t,r,c);n&&(c.add(n.exercise.id),l.push(n))}let u=O(e,t,r.has(`bike`)),f=ne(e,t);return{day:e,title:a.title,prescription:te(e,t),warmUp:u,exercises:l,coolDown:f}}var k={push:`Push`,pull:`Pull`,legs:`Legs + Abs`,home:`At-home abs`,mobility:`Mobility reset`},A={push:`Push`,pull:`Pull`,legs:`Legs`,home:`Home`,mobility:`Reset`};function j(e){return u.includes(e)}function M(e){return j(e)?`Day ${u.indexOf(e)+1}`:`No gym`}function N(e){return j(e)?`${M(e)} ${k[e]}`:k[e]}function ie(e,t){return j(e)?`${M(e)} · ${t}`:t}function ae(e,t,n=c){return`<nav class="day-tabs" aria-label="${t}">${n.map(t=>`
      <button type="button" class="day-tab${t===e?` active`:``}" data-day="${t}" aria-pressed="${t===e}">
        <small class="day-number">${M(t)}</small>${k[t]}
      </button>`).join(``)}</nav>`}function P(e){return`https://www.youtube.com/watch?v=${e}`}function F(e,t=``){return`<ul class="${t}">${e.map(e=>`<li>${e}</li>`).join(``)}</ul>`}function oe(e){return e.cautionAreas.map(e=>`<p class="caution">${S[e]}</p>`).join(``)}function se(e){let{exercise:t}=e,n=e=>`<ol>${e.map(e=>`<li>${e}</li>`).join(``)}</ol>`;return`
    <h3>Set up</h3>
    ${n(t.setup)}
    <h3>How to do it</h3>
    ${n(t.steps)}
    <h3>Avoid</h3>
    ${F(t.mistakes,`mistakes`)}
    <a class="demo-link" href="${P(t.video.youtubeId)}" target="_blank" rel="noopener noreferrer">
      Watch the demo video ↗<small>by ${t.video.channel}</small>
    </a>
  `}function I(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function ce(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}var le=`https://ashnasahni.github.io/gym-guide/`,L={time:`18:00`,minutes:60},R=[30,45,60,90,120],ue=[`MO`,`TU`,`WE`,`TH`,`FR`,`SA`,`SU`];function de(e){return/^([01]\d|2[0-3]):[0-5]\d$/.test(e)}function fe(e){return{time:e?.time!==void 0&&de(e.time)?e.time:L.time,minutes:e?.minutes!==void 0&&R.includes(e.minutes)?e.minutes:L.minutes}}function z(e){return String(e).padStart(2,`0`)}function pe(e){return`${`${e.getFullYear()}${z(e.getMonth()+1)}${z(e.getDate())}`}T${z(e.getHours())}${z(e.getMinutes())}00`}function me(e){return`${`${e.getUTCFullYear()}${z(e.getUTCMonth()+1)}${z(e.getUTCDate())}`}T${z(e.getUTCHours())}${z(e.getUTCMinutes())}${z(e.getUTCSeconds())}Z`}function he(e){return e.replace(/\\/g,`\\\\`).replace(/;/g,`\\;`).replace(/,/g,`\\,`).replace(/\r?\n/g,`\\n`)}function B(e){let t=new TextEncoder,n=[],r=``,i=0,a=75;for(let o of e){let e=t.encode(o).length;i+e>a&&(n.push(r),r=``,i=0,a=74),r+=o,i+=e}return n.push(r),n.join(`\r
 `)}function ge(e){return u.includes(e)?`${k[e]} day`:k[e]}function _e(e,t,n){let[r,i]=n.split(`:`).map(Number),a=o(e,(t-(e.getDay()+6)%7+7)%7);return a.setHours(r,i,0,0),a<=e?o(a,7):a}function ve(e,t,n){return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Gym Guide//Weekly plan//EN`,`CALSCALE:GREGORIAN`,`METHOD:PUBLISH`,`X-WR-CALNAME:Gym Guide`,...e.flatMap((e,r)=>{if(!e)return[];let a=_e(n,r,t.time),o=new Date(a.getTime()+t.minutes*6e4);return[`BEGIN:VEVENT`,`UID:gym-guide-${r}@ashnasahni.github.io`,`DTSTAMP:${me(n)}`,`DTSTART:${pe(a)}`,`DTEND:${pe(o)}`,`RRULE:FREQ=WEEKLY;BYDAY=${ue[r]}`,`SUMMARY:${he(ge(e))}`,`DESCRIPTION:${he(`${i[e].title}\nOpen Gym Guide: ${le}`)}`,`END:VEVENT`]}),`END:VCALENDAR`].map(B).join(`\r
`)+`\r
`}function ye(e,t){let n=R.map(t=>`<option value="${t}"${t===e.minutes?` selected`:``}>${t} minutes</option>`).join(``);return`
    <section class="card">
      <h2>Add to your calendar</h2>
      <p class="hint">Adds your workout days as weekly repeating events. Tap the button, then open the file it downloads and your calendar app will offer to add them.</p>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Start time</span>
          <input type="time" data-field="cal-time" value="${e.time}" />
        </label>
        <label class="calendar-field">
          <span>Length</span>
          <select data-field="cal-minutes">${n}</select>
        </label>
      </div>
      ${t?`<p class="notice">You changed your week. Tap Save profile below first, then add it to your calendar.</p>`:``}
      <button type="button" class="secondary" data-action="add-to-calendar"${t?` disabled`:``}>Add to calendar</button>
      <p class="hint small">This is a one-time copy. If you change your week later, delete the old events in your calendar and add it again. The events repeat every week until you delete them.</p>
    </section>
  `}var be=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],V=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];function xe(e,t,n){let r=a(e),i=s(e),c=new Map;for(let e of n)c.set(a(new Date(e.date)),e.day);return Array.from({length:7},(e,n)=>{let s=o(i,n),l=a(s),u={key:l,date:s,weekdayIndex:n,isToday:l===r},d=c.get(l);if(d)return{...u,status:`done`,workout:d};let f=t[n];return f?l<r?{...u,status:`missed`,workout:f}:{...u,status:`planned`,workout:f}:{...u,status:`rest`,workout:null}})}function H(e){return e.toLocaleDateString(void 0,{month:`long`,day:`numeric`})}function Se(e){return e.isToday?`Today`:`${V[e.weekdayIndex]}, ${H(e.date)}`}function Ce(e){let t=e.status===`done`&&e.workout?`${k[e.workout]} workout, done`:e.status===`planned`&&e.workout?`${k[e.workout]} planned`:e.status===`missed`&&e.workout?`${k[e.workout]} planned, not logged`:`rest day`;return`${V[e.weekdayIndex]} ${H(e.date)}, ${t}${e.isToday?`, today`:``}`}function we(e,t){return`
    <div class="calendar" role="group" aria-label="This week">${e.map(e=>{let n=e.workout?A[e.workout]:`Rest`,r=e.status===`done`?`✓`:e.status===`missed`?`○`:``;return`
        <button type="button" class="${[`cal-day`,`cal-${e.status}`,e.isToday?`today`:``,e.key===t?`selected`:``].filter(Boolean).join(` `)}" data-date="${e.key}"
                aria-pressed="${e.key===t}" aria-label="${Ce(e)}">
          <span class="cal-weekday">${be[e.weekdayIndex]}</span>
          <span class="cal-date">${e.date.getDate()}</span>
          <span class="cal-label">${n}</span>
          <span class="cal-mark" aria-hidden="true">${r}</span>
        </button>`}).join(``)}</div>
    <p class="cal-legend">✓ done · ○ not logged · orange outline = today · tap a day to see it</p>
  `}function Te(e,t,n,r){return`
    <section class="card home-card">
      <h2>${e} <small>optional</small></h2>
      <p class="home-blurb">${t}</p>
      ${r?`<button type="button" class="secondary" data-day="${n}">Do ${k[n].toLowerCase()}</button>`:`<p class="hint">You can start it on the day.</p>`}
    </section>`}function Ee(e){return`
    <section class="card">
      <p>Rest day. Your muscles grow while you recover, so a walk or some stretching is plenty.</p>
    </section>

    ${Te(`At-home abs`,`About 10 minutes, no equipment, gentle on your back and knees. Same voice and timer as a gym workout.`,`home`,e.isToday)}

    ${Te(`Mobility reset`,`About 8 minutes of slow stretches for your neck, upper back and hips. No equipment.`,`mobility`,e.isToday)}

    ${e.isToday?`<section class="card">
             <p class="picker-hint">Want a gym workout instead?</p>
             ${ae(null,`Pick a gym workout for today`,u)}
           </section>`:``}`}function De(e){let t=[{value:`rest`,label:`Rest`,spoken:`Rest`},...l.map(e=>({value:e,label:A[e],spoken:k[e]}))];return`<div class="plan-editor">${V.map((n,r)=>{let i=e[r]??`rest`;return`
      <div class="plan-row">
        <span class="plan-day">${n}</span>
        <div class="plan-options">${t.map(e=>`
          <button type="button" class="plan-option${e.value===i?` active`:``}"
                  data-plan-day="${r}" data-plan-workout="${e.value}"
                  aria-pressed="${e.value===i}" aria-label="${n}: ${e.spoken}">${e.label}</button>`).join(``)}</div>
      </div>`}).join(``)}</div>`}var Oe=[{id:`dumbbells`,name:`Dumbbells`,hint:`Rack of free weights`},{id:`bench`,name:`Adjustable bench`,hint:`Flat or tilted bench`},{id:`mat`,name:`Floor mat`,hint:`Stretching / ab area`},{id:`cable`,name:`Cable machine`,hint:`Pulley tower with handles`},{id:`lat-pulldown`,name:`Lat pulldown`,hint:`Seated, pull a bar down`},{id:`seated-row`,name:`Seated cable row`,hint:`Seated, pull a handle in`},{id:`chest-press`,name:`Chest press machine`,hint:`Seated, push handles forward`},{id:`shoulder-press`,name:`Shoulder press machine`,hint:`Seated, push handles up`},{id:`pec-deck`,name:`Pec deck / rear delt fly`,hint:`Seated, arms swing together`},{id:`assisted-pullup`,name:`Assisted pull-up / dip`,hint:`Kneel on a pad that helps lift you`},{id:`leg-press`,name:`Leg press`,hint:`Seated, push a platform with your feet`},{id:`leg-curl`,name:`Leg curl machine`,hint:`Bend knees against a pad`},{id:`leg-extension`,name:`Leg extension machine`,hint:`Straighten knees against a pad`},{id:`hip-abduction`,name:`Hip abduction machine`,hint:`Seated, push knees outward`},{id:`squat-rack`,name:`Squat rack + barbell`,hint:`Barbell resting on hooks`},{id:`bike`,name:`Stationary bike`,hint:`For warm-ups`}],U=Oe.map(e=>e.id),W=0;function ke(e,t){if(!(`speechSynthesis`in window))return;window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(e);n.rate=1;let r=++W;n.onstart=()=>t?.onStart();let i=()=>{r===W&&t?.onEnd()};n.onend=i,n.onerror=i,window.speechSynthesis.speak(n)}function Ae(e,t,n){let r=URL.createObjectURL(new Blob([n],{type:t})),i=document.createElement(`a`);i.href=r,i.download=e,document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),1e4)}function je(e){`vibrate`in navigator&&navigator.vibrate(e)}var G=null,Me=!1;async function Ne(){if(`wakeLock`in navigator&&document.visibilityState===`visible`)try{G=await navigator.wakeLock.request(`screen`)}catch{G=null}}document.addEventListener(`visibilitychange`,()=>{Me&&document.visibilityState===`visible`&&Ne()});function Pe(e){Me=e,e?Ne():(G?.release(),G=null)}var Fe={waterGoal:8,proteinGoal:null,days:{}},Ie=[{name:`2 eggs`,grams:12},{name:`Chicken breast (palm-size)`,grams:30},{name:`Greek yogurt (1 cup)`,grams:20},{name:`Protein shake (1 scoop)`,grams:25},{name:`Paneer (100 g)`,grams:18},{name:`Tofu (half block)`,grams:20},{name:`Dal / lentils (1 cup)`,grams:18},{name:`Milk (1 glass)`,grams:8}];function K(e,t){return e.days[t]??{glasses:0,protein:[]}}function Le(e,t,n){return{...e,days:{...e.days,[t]:n}}}function Re(e,t,n){let r=K(e,t);return Le(e,t,{...r,glasses:Math.max(0,r.glasses+n)})}function ze(e,t,n){let r=K(e,t);return Le(e,t,{...r,protein:[...r.protein,n]})}function Be(e,t,n){let r=K(e,t);return Le(e,t,{...r,protein:r.protein.filter((e,t)=>t!==n)})}function Ve(e){return e.protein.reduce((e,t)=>e+t.grams,0)}function He(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isFinite(n)||n<=0||n>300?`Enter the protein in grams, between 1 and 300.`:null}function Ue(e,t){return`<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e}">
    <div class="meter-fill" style="width: ${Math.min(100,Math.round(e/t*100))}%"></div>
  </div>`}function We(e,t){let n=e.waterGoal;return`
    <section class="card">
      <h2>Water</h2>
      <p class="fuel-total"><strong>${t}</strong> of ${n} glasses${t>=n?` — goal reached!`:``}</p>
      ${Ue(t,n)}
      <div class="button-row fuel-buttons">
        <button type="button" class="secondary" data-action="water" data-delta="-1" ${t===0?`disabled`:``} aria-label="Remove a glass">−1</button>
        <button type="button" class="primary" data-action="water" data-delta="1">+1 glass</button>
      </div>
      <div class="goal-row">
        <span>Daily goal</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="-1" aria-label="Lower water goal">−</button>
        <span>${n} glasses</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="1" aria-label="Raise water goal">+</button>
      </div>
    </section>
  `}function Ge(e){return`
    <p class="hint">Set a daily goal to see how close you are. A common target for building muscle is about 0.7 g of protein per pound of body weight; a doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 100" value="${I(e.goal)}" data-field="protein-goal" aria-label="Daily protein goal in grams" />
      <span>g</span>
      <button type="button" class="secondary" data-action="set-protein-goal">Set goal</button>
    </div>
  `}function Ke(e,t,n){let r=K(e,t),i=Ve(r),a=e.proteinGoal;return`
    <section class="card">
      <h2>Protein</h2>
      ${a===null?`<p class="fuel-total"><strong>${i}</strong> g today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} g${i>=a?` — goal reached!`:``}</p>${Ue(i,a)}`}
      ${r.protein.length===0?`<p class="hint">Nothing logged yet today. Tap a food below to add it.</p>`:`<ul class="entry-list">${r.protein.map((e,t)=>`
          <li>
            <span>${I(e.name)}</span>
            <span class="entry-grams">${e.grams} g</span>
            <button type="button" class="link-button" data-action="remove-protein" data-index="${t}" aria-label="Remove ${I(e.name)}">Remove</button>
          </li>`).join(``)}</ul>`}

      <h3>Quick add</h3>
      <div class="quick-grid">${Ie.map((e,t)=>`
      <button type="button" class="chip quick-food" data-action="quick-protein" data-index="${t}">
        <span>${e.name}</span><small>~${e.grams} g</small>
      </button>`).join(``)}</div>
      <p class="hint small">Amounts are rough averages for a typical serving.</p>

      <h3>Something else</h3>
      <div class="inline-form">
        <input type="text" placeholder="What you ate" value="${I(n.name)}" data-field="protein-name" aria-label="Food name" maxlength="60" />
        <input type="number" inputmode="numeric" min="1" placeholder="g" value="${I(n.grams)}" data-field="protein-grams" aria-label="Protein in grams" class="grams-input" />
        <button type="button" class="secondary" data-action="add-protein">Add</button>
      </div>
      ${n.error?`<p class="form-error" role="alert">${n.error}</p>`:``}

      ${a===null?Ge(n):`<button type="button" class="link-button" data-action="clear-protein-goal">Change protein goal (${a} g)</button>`}
    </section>
  `}function qe(e,t,n){return`
    <header class="screen-header">
      <h1>Fuel</h1>
      <p class="lead">Water and protein help your muscles recover. Today's log resets at midnight.</p>
    </header>
    ${We(e,K(e,t).glasses)}
    ${Ke(e,t,n)}
  `}var Je={push:{name:`Push day mix`,songs:[{id:`c3P3lKFqYYM`,title:`Mundian To Bach Ke`,artist:`Panjabi MC`},{id:`7YuAzR2XVAM`,title:`Lose Yourself`,artist:`Eminem`},{id:`PsO6ZnUZI0g`,title:`Stronger`,artist:`Kanye West`},{id:`cl0a3i2wFcc`,title:`G.O.A.T.`,artist:`Diljit Dosanjh`},{id:`VNs_cCtdbPc`,title:`Brown Munde`,artist:`AP Dhillon, Gurinder Gill, Shinda Kahlon`},{id:`7wtfhZwyrcc`,title:`Believer`,artist:`Imagine Dragons`},{id:`cWMxCE2HTag`,title:`Softly`,artist:`Karan Aujla`}]},pull:{name:`Pull day mix`,songs:[{id:`eZ2PtEx9-ls`,title:`Tunak Tunak Tun`,artist:`Daler Mehndi`},{id:`U9XLJ6GkccI`,title:`HUMBLE.`,artist:`Kendrick Lamar`},{id:`4NRXx6U8ABQ`,title:`Blinding Lights`,artist:`The Weeknd`},{id:`jzpm7vkymSk`,title:`DJ Waley Babu`,artist:`Badshah, Aastha Gill`},{id:`9HDEHj2yzew`,title:`Physical`,artist:`Dua Lipa`},{id:`yqwbmjL8vd4`,title:`So High`,artist:`Sidhu Moose Wala`},{id:`L53gjP-TtGE`,title:`POWER`,artist:`Kanye West`}]},legs:{name:`Legs day mix`,songs:[{id:`btPJPFnesV4`,title:`Eye of the Tiger`,artist:`Survivor`},{id:`Obim8BYGnOE`,title:`'Till I Collapse`,artist:`Eminem, Nate Dogg`},{id:`wPQEeBAXou0`,title:`Warriors`,artist:`Imagine Dragons`},{id:`tOOy8PV1OCE`,title:`Do You Know`,artist:`Diljit Dosanjh`},{id:`CD-E-LDc384`,title:`Enter Sandman`,artist:`Metallica`},{id:`AxWejrVYcCg`,title:`Gonna Fly Now (Theme from Rocky)`,artist:`Bill Conti`}]},home:{name:`At-home abs mix`,songs:[{id:`4NRXx6U8ABQ`,title:`Blinding Lights`,artist:`The Weeknd`},{id:`9HDEHj2yzew`,title:`Physical`,artist:`Dua Lipa`},{id:`7wtfhZwyrcc`,title:`Believer`,artist:`Imagine Dragons`},{id:`cWMxCE2HTag`,title:`Softly`,artist:`Karan Aujla`},{id:`VNs_cCtdbPc`,title:`Brown Munde`,artist:`AP Dhillon, Gurinder Gill, Shinda Kahlon`},{id:`cl0a3i2wFcc`,title:`G.O.A.T.`,artist:`Diljit Dosanjh`}]},mobility:{name:`Mobility mix`,songs:[{id:`k4V3Mo61fJM`,title:`Fix You`,artist:`Coldplay`},{id:`nSDgHBxUbVQ`,title:`Photograph`,artist:`Ed Sheeran`},{id:`3IUqoyTxEU8`,title:`ocean eyes`,artist:`Billie Eilish`},{id:`pRIZohFFOMo`,title:`Someone You Loved`,artist:`Lewis Capaldi`},{id:`U3ASj1L6_sY`,title:`Easy On Me`,artist:`Adele`},{id:`6bGmUTAfh-A`,title:`Let Her Go`,artist:`Passenger`}]}},Ye=`https://www.youtube.com/iframe_api`,Xe=1e4,Ze=.3,Qe=8e3,$e=1,et=200,tt=null;function nt(){return window.YT?.Player?Promise.resolve(window.YT):(tt??=new Promise((e,t)=>{let n=e=>{window.clearTimeout(r),tt=null,t(Error(e))},r=window.setTimeout(()=>n(`timed out`),Xe);window.onYouTubeIframeAPIReady=()=>{window.clearTimeout(r),window.YT?e(window.YT):n(`player missing`)};let i=document.createElement(`script`);i.src=Ye,i.onerror=()=>n(`blocked or offline`),document.head.appendChild(i)}),tt)}function rt(e,t){e.classList.toggle(`expanded`,t),document.body.classList.toggle(`music-open`,t);let n=e.querySelector(`.dock-toggle`);n&&(n.textContent=t?`Hide player`:`Show player`,n.setAttribute(`aria-expanded`,String(t)))}function it(e){let t=document.createElement(`section`);return t.id=`music-dock`,t.className=`music-dock`,t.hidden=!0,t.setAttribute(`aria-label`,`Music`),t.innerHTML=`
    <div class="dock-bar">
      <span class="dock-title"></span>
      <span class="dock-buttons">
        <button type="button" class="link-button dock-toggle" aria-expanded="false">Show player</button>
        <button type="button" class="link-button dock-stop">Stop music</button>
      </span>
    </div>
    <div class="dock-player"></div>`,t.querySelector(`.dock-stop`)?.addEventListener(`click`,e),t.querySelector(`.dock-toggle`)?.addEventListener(`click`,()=>rt(t,!t.classList.contains(`expanded`))),document.body.appendChild(t),t}function at(e,t){let n=null,r=null,i=null,a=null,o=0,s=!1,c;function l(){return n??=it(f),n}function u(){let e=l().querySelector(`.dock-player`);e&&(e.innerHTML=`<div id="music-player"></div>`)}function d(e,n){return new Promise((r,i)=>{let a=window.setTimeout(()=>i(Error(`player timed out`)),Xe),s=new e.Player(`music-player`,{width:`100%`,height:String(et),playerVars:{playsinline:1,rel:0,enablejsapi:1,origin:window.location.origin},events:{onReady:()=>{window.clearTimeout(a),r(s)},onError:()=>{o+=1,o>=n?(f(),t(`None of these songs could play right now. Try again later.`)):s.nextVideo()},onStateChange:e=>{e.data===$e&&(o=0)}}})})}function f(){r?.destroy(),r=null,i=null,a=null,o=0,n&&(n.hidden=!0),document.body.classList.remove(`music-on`,`music-open`),e()}function p(){window.clearTimeout(c),r&&a!==null&&(r.setVolume(a),a=null)}async function ee(n){if(i===n&&r){r.playVideo();return}if(s)return;s=!0;let a=Je[n],c=l(),p=c.querySelector(`.dock-title`);p&&(p.textContent=`♪ ${a.name}`),rt(c,!1),c.hidden=!1,document.body.classList.add(`music-on`);try{let t=await nt();r?.destroy(),r=null,u(),o=0,r=await d(t,a.songs.length),r.loadPlaylist({playlist:a.songs.map(e=>e.id),index:0}),r.setLoop(!0),i=n,e()}catch{f(),t(`Couldn't load the music. Check your connection and try again.`)}finally{s=!1}}return{play:ee,stop:f,current:()=>i,duck(){r&&a===null&&(a=r.getVolume(),r.setVolume(Math.round(a*Ze)),c=window.setTimeout(p,Qe))},restore:p}}function ot(e,t){let n=Je[e],r=t===e?`<p class="music-status">♪ Playing now. The player is at the bottom of the screen. If it's silent, tap play there.</p>`:`<button type="button" class="secondary" data-action="play-music" data-workout="${e}">▶ Play ${n.name}</button>`;return`
    <section class="card music-card">
      <h2>Music</h2>
      <p class="music-name">${n.name} · ${n.songs.length} songs</p>
      ${r}
      <p class="hint small">Plays through YouTube and keeps going while you move around the app. Some songs are explicit.</p>
    </section>`}function st(e,t){if(t===e)return``;let n=Je[e];return`
    <section class="card music-card music-row">
      <div>
        <h2>Music</h2>
        <p class="music-name">${n.name}</p>
      </div>
      <button type="button" class="secondary" data-action="play-music" data-workout="${e}" aria-label="Play ${n.name}">▶ Play</button>
    </section>`}var ct=[{id:`lean-muscle`,label:`Build lean muscle`,detail:`Gain muscle for a toned look`},{id:`strength`,label:`Get stronger`,detail:`Lift heavier, fewer reps`},{id:`general`,label:`General fitness`,detail:`Lighter, steady routine`}],lt=[{id:`new`,label:`New to lifting`},{id:`some`,label:`Some experience`},{id:`experienced`,label:`Experienced`}],ut=[{id:`knees`,label:`Knees`},{id:`lowerBack`,label:`Lower back`},{id:`neckUpperBack`,label:`Neck / upper back`},{id:`feet`,label:`Feet / ankles`},{id:`shoulders`,label:`Shoulders`},{id:`wrists`,label:`Wrists`}],q={goal:`lean-muscle`,experience:`new`,protectedAreas:[],avoidedExerciseIds:[],weekPlan:[`push`,null,`pull`,null,`legs`,null,null]};function dt(e){let t=[null,null,null,null,null,null,null];return[...e].filter(e=>Number.isInteger(e)&&e>=0&&e<=6).sort((e,t)=>e-t).forEach((e,n)=>{t[e]=u[n%u.length]}),t}function ft(e){let{gymDays:t,...n}=e,r={...q,...n};if(!n.weekPlan&&Array.isArray(t)){let e=dt(t);e.some(Boolean)&&(r.weekPlan=e)}return r}var pt=5;function mt(e,t){let n=e[t];return n?.[n.length-1]}function J(e,t){let n=e.sets.map(e=>e.amount).join(`, `),r=e.sets[e.sets.length-1]?.weight,i=t===`seconds`?` sec`:` reps`;return r==null?`${n}${i}`:`${r} lb × ${n}${i}`}function ht(e,t,n,r={}){if(!e||e.sets.length===0)return{weight:null,message:n===`bodyweight`?`First time: aim for ${t.min}–${t.max} ${t.unit}.`:`First time: start light. Find a weight where the last 2 reps feel hard but your form stays clean.`};let i=e.sets.every(e=>e.amount>=t.max),a=e.sets.reduce((e,t)=>e+t.amount,0)/e.sets.length<t.min-2,o=e.sets[e.sets.length-1].weight;if(n===`bodyweight`||o===null)return{weight:null,message:i?`You hit ${t.max} on every set. Try a couple more ${t.unit} each set.`:`Aim for ${t.max} ${t.unit} on every set.`};let s=n===`assist`?Math.max(0,o-pt):o+pt,c=n===`assist`?o+pt:Math.max(0,o-pt);return i?r.holdWeight?{weight:o,message:`Easy day: stay at ${o} lb and keep the reps smooth.`}:{weight:s,message:n===`assist`?`You hit ${t.max} reps every set. Try ${s} lb of help (a little less).`:`You hit ${t.max} reps every set. Try ${s} lb.`}:a?{weight:c,message:`That was heavy. Try ${c} lb and aim for ${t.min}–${t.max} reps.`}:{weight:o,message:`Stay at ${o} lb and aim for ${t.max} reps on every set.`}}function gt(e,t,n,r){let i=e[t]??[],a=i[i.length-1],o=a&&a.date===n?[...i.slice(0,-1),{...a,sets:[...a.sets,r]}]:[...i,{date:n,sets:[r]}];return{...e,[t]:o}}function _t(e){let t=new Map;for(let[n,r]of Object.entries(e))for(let e of r){if(e.sets.length===0)continue;let r=t.get(e.date)??{date:e.date,entries:[]};r.entries.push({exerciseId:n,session:e}),t.set(e.date,r)}return[...t.values()].sort((e,t)=>t.date.localeCompare(e.date))}function vt(e,t){let n=s(t);return _t(e).filter(e=>new Date(e.date)>=n).length}function yt(e,t){return e.filter(e=>e.sets.length>0).map(e=>{if(t===`bodyweight`)return Math.max(...e.sets.map(e=>e.amount));let n=e.sets.map(e=>e.weight??0);return t===`assist`?Math.min(...n):Math.max(...n)})}var bt={1:`Wrecked`,2:`Tired`,3:`Okay`,4:`Good`,5:`Great`},xt=[1,2,3,4,5],St=2,Ct=70,wt=6,Tt=4,Et=85,Dt=7;function Ot(e){return e.feel<=St||e.readiness!==null&&e.readiness<Ct||e.hours!==null&&e.hours<wt?`easy`:e.feel>=Tt&&(e.readiness===null||e.readiness>=Et)&&(e.hours===null||e.hours>=Dt)?`push`:`normal`}function kt(e){return e===`easy`?`Take it easy today. If you work out, workout mode drops a set from each exercise and keeps your weights where they were. Resting is fine too.`:e===`push`?`You're well recovered, so it's a good day to aim for the top of your rep range. Keep your form clean.`:`A normal day: train as planned.`}function At(e,t){return t===`easy`?{...e,sets:Math.max(1,e.sets-1)}:e}function jt(e){let t=[`Felt ${bt[e.feel].toLowerCase()} (${e.feel}/5)`];return e.hours!==null&&t.push(`slept ${e.hours} h`),e.readiness!==null&&t.push(`readiness ${e.readiness}`),t.join(` · `)}function Mt(e,t){return e.find(e=>e.date===t)}function Nt(e,t){return[...e.filter(e=>e.date!==t.date),t].sort((e,t)=>e.date.localeCompare(t.date)).slice(-180)}function Pt(e,t,n){if(e===null||!xt.includes(e))return{ok:!1,error:`Tap a number for how rested you feel.`};let r=null;if(t.trim()!==``&&(r=Number(t),!Number.isFinite(r)||r<0||r>24))return{ok:!1,error:`Hours slept should be a number between 0 and 24, or leave it blank.`};let i=null;return n.trim()!==``&&(i=Number(n),!Number.isInteger(i)||i<0||i>100)?{ok:!1,error:`Readiness should be a whole number from 0 to 100, or leave it blank.`}:{ok:!0,feel:e,hours:r,readiness:i}}var Ft=10;function It(e){return e.timedSeconds?`seconds`:`reps`}function Y(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function Lt(e,t){let n=e.weightKind??`load`;return n===`bodyweight`?`${t} ${e.timedSeconds?`sec`:`reps`}`:n===`assist`?`${t} lb of help`:`${t} lb`}function Rt(e,t,n,r){let i={top:22,right:20,bottom:22,left:20},a=Math.min(...n),o=Math.max(...n),s=o-a||1,c=e=>i.left+e*(300-i.left-i.right)/(n.length-1),l=e=>i.top+(o-e)*(110-i.top-i.bottom)/s,u=n.map((e,t)=>`${t===0?`M`:`L`}${c(t).toFixed(1)},${l(e).toFixed(1)}`).join(` `),d=n.map((e,n)=>{let i=`${Y(t[n])}: ${r(e)}`;return`
        <g class="chart-point" data-point="${i}" tabindex="0" role="button" aria-label="${i}">
          <circle cx="${c(n)}" cy="${l(e)}" r="14" class="hit" />
          <circle cx="${c(n)}" cy="${l(e)}" r="4.5" class="dot" />
        </g>`}).join(``);return`
    <svg class="trend-chart" viewBox="0 0 300 110" role="img" aria-label="${e} over time">
      <line x1="${i.left}" x2="${300-i.right}" y1="${110-i.bottom+6}" y2="${110-i.bottom+6}" class="baseline" />
      <path d="${u}" class="trend-line" />
      ${d}
      <text x="${c(0)}" y="${l(n[0])-10}" class="value-label" text-anchor="start">${n[0]}</text>
      <text x="${c(n.length-1)}" y="${l(n[n.length-1])-10}" class="value-label" text-anchor="end">${n[n.length-1]}</text>
      <text x="${i.left}" y="106" class="axis-label">${Y(t[0])}</text>
      <text x="${300-i.right}" y="106" class="axis-label" text-anchor="end">${Y(t[t.length-1])}</text>
    </svg>
    <p class="chart-caption" aria-live="polite">Tap a dot to see that day.</p>
  `}function zt(e){return Object.entries(e).filter(([e,t])=>r[e]&&t.some(e=>e.sets.length>0)).map(([e,t])=>{let n=r[e],i=t.filter(e=>e.sets.length>0),a=yt(i,n.weightKind??`load`),o=i[i.length-1],s=(n.weightKind??`load`)===`assist`?Math.min(...a):Math.max(...a),c=a.length>=2?Rt(n.name,i.map(e=>e.date),a,e=>Lt(n,e)):`<p class="hint">Log it again to start a chart.</p>`;return`
        <section class="card progress-card">
          <h3 class="progress-name">${n.name}</h3>
          <p class="progress-stats">
            <span>Best: <strong>${Lt(n,s)}</strong></span>
            <span>Last: ${J(o,It(n))}</span>
          </p>
          ${c}
        </section>`}).join(``)}function Bt(e){return _t(e).slice(0,Ft).map(e=>{let t=e.entries.filter(({exerciseId:e})=>r[e]).map(({exerciseId:e,session:t})=>{let n=r[e];return`<li>${n.name}: <span class="hint">${J(t,It(n))}</span></li>`}).join(``);return`
        <section class="card">
          <h3 class="progress-name">${Y(e.date)}</h3>
          <ul class="summary">${t}</ul>
        </section>`}).join(``)}function Vt(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r,12).toISOString()}function Ht(e){if(e.length===0)return``;let t=e.slice(-14),n=t[t.length-1],r=[{name:`How rested you felt`,points:t.map(e=>({date:e.date,value:e.feel})),format:e=>`${bt[e]??e} (${e}/5)`},{name:`Hours slept`,points:t.flatMap(e=>e.hours===null?[]:[{date:e.date,value:e.hours}]),format:e=>`${e} h`},{name:`Readiness`,points:t.flatMap(e=>e.readiness===null?[]:[{date:e.date,value:e.readiness}]),format:e=>String(e)}].filter(e=>e.points.length>=2).map(e=>`
        <section class="card progress-card">
          <h3 class="progress-name">${e.name}</h3>
          ${Rt(e.name,e.points.map(e=>Vt(e.date)),e.points.map(e=>e.value),e.format)}
        </section>`).join(``);return`
    <h2 class="section-title">Recovery</h2>
    <section class="card">
      <p class="progress-stats"><span>Last check-in (${Y(Vt(n.date))}): ${jt(n)}</span></p>
      ${r?``:`<p class="hint">Check in on a few more mornings and your charts will appear here.</p>`}
    </section>
    ${r}`}function Ut(e,t,n,r){let i=`
    <header class="screen-header">
      <h1>Your progress</h1>
      <p class="lead">Everything here comes from the sets you log in workout mode.</p>
    </header>`;if(_t(e).length===0)return`${i}
      <section class="card empty">
        <p>No workouts logged yet. Start a workout and save your sets, and your progress will show up here.</p>
        <button type="button" class="secondary" data-nav="today">Go to today's workout</button>
      </section>
      ${Ht(r)}`;let a=vt(e,t);return`${i}
    <section class="card week-card">
      <p class="week-count"><strong>${a}</strong> of ${n}</p>
      <p>workouts this week${a>=n?` — goal reached!`:``}</p>
      <p class="hint">That's the number of workout days in your week plan (change it in Profile). The week starts Monday.</p>
    </section>

    ${Ht(r)}

    <h2 class="section-title">Exercises</h2>
    ${zt(e)}

    <h2 class="section-title">Recent workouts</h2>
    ${Bt(e)}
  `}var Wt={open:!1,feel:null,hours:``,readiness:``,error:``};function Gt(e){return`
    <section class="card recovery-card">
      <h2>Morning check-in</h2>
      <p class="feel-question" id="feel-question">How rested do you feel?</p>
      <div class="feel-row" role="group" aria-labelledby="feel-question">${xt.map(t=>`
      <button type="button" class="feel-option${e.feel===t?` active`:``}" data-action="checkin-feel" data-value="${t}" aria-pressed="${e.feel===t}">
        <strong>${t}</strong><small>${bt[t]}</small>
      </button>`).join(``)}</div>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Hours slept <small>(optional)</small></span>
          <input type="number" inputmode="decimal" step="0.5" min="0" max="24" placeholder="7.5" value="${e.hours}" data-field="checkin-hours" />
        </label>
        <label class="calendar-field">
          <span>Readiness <small>(optional)</small></span>
          <input type="number" inputmode="numeric" step="1" min="0" max="100" placeholder="0–100" value="${e.readiness}" data-field="checkin-readiness" />
        </label>
      </div>
      <p class="hint small">Readiness is the score from a ring or watch such as Oura, if you have one. Skip it if you don't.</p>
      ${e.error?`<p class="form-error" role="alert">${e.error}</p>`:``}
      <div class="button-row">
        <button type="button" class="secondary" data-action="checkin-cancel">Cancel</button>
        <button type="button" class="primary" data-action="checkin-save">Save check-in</button>
      </div>
    </section>`}function Kt(e,t){if(t.open)return Gt(t);if(!e)return`
      <section class="card recovery-card">
        <h2>Morning check-in</h2>
        <p>How recovered are you? It takes ten seconds and tunes today's workout.</p>
        <button type="button" class="secondary" data-action="checkin-open">Check in</button>
      </section>`;let n=Ot(e);return`
    <section class="card recovery-card level-${n}">
      <h2>Today's recovery</h2>
      <p class="recovery-summary">${jt(e)}</p>
      <p class="recovery-advice">${kt(n)}</p>
      <button type="button" class="link-button" data-action="checkin-open">Change check-in</button>
      <p class="hint small">A training suggestion, not medical advice.</p>
    </section>`}function qt(e,t,n=null){return{day:e.day,startedAt:t.toISOString(),exercises:e.exercises,prescription:At(e.prescription,n),index:0,setNumber:1,phase:e.exercises.length>0?`lift`:`done`,restEndsAt:null,recoveryLevel:n}}function X(e){return e.exercises[e.index]}function Jt(e){return e.setNumber>=e.prescription.sets}function Yt(e){return e.index>=e.exercises.length-1}function Xt(e){return{...e,phase:`log`}}function Zt(e,t){if(Jt(e)&&Yt(e))return{...e,phase:`done`,restEndsAt:null};let n=t+e.prescription.restSeconds*1e3;return Jt(e)?{...e,index:e.index+1,setNumber:1,phase:`rest`,restEndsAt:n}:{...e,setNumber:e.setNumber+1,phase:`rest`,restEndsAt:n}}function Qt(e){return{...e,phase:`lift`,restEndsAt:null}}function $t(e,t,n){let r=Math.max(e.restEndsAt??n,n);return{...e,restEndsAt:r+t*1e3}}function en(e){return Yt(e)?{...e,phase:`done`,restEndsAt:null}:{...e,index:e.index+1,setNumber:1,phase:`lift`,restEndsAt:null}}function tn(e,t){let n=e.exercises.map((n,r)=>r===e.index?t:n);return{...e,exercises:n,setNumber:1,phase:`lift`,restEndsAt:null}}function nn(e,t){return e.restEndsAt===null?0:Math.max(0,Math.ceil((e.restEndsAt-t)/1e3))}var rn=`gymGuide.v1`;function an(){return{profile:null,equipmentIds:[...U],equipmentConfirmed:!1,history:{},session:null,nutrition:Fe,workoutLog:[],calendar:L,recovery:[]}}function on(){try{let e=localStorage.getItem(rn);if(!e)return an();let t=JSON.parse(e);return{...an(),...t,profile:t.profile?ft(t.profile):null,nutrition:{...Fe,...t.nutrition},calendar:fe(t.calendar),recovery:Array.isArray(t.recovery)?t.recovery:[]}}catch{return an()}}function Z(e){try{return localStorage.setItem(rn,JSON.stringify(e)),!0}catch{return!1}}function Q(e,t,n){let r=mt(e,n);return r&&r.date===t.startedAt?r.sets:[]}function sn(e,t,n){let r=(e[n]??[]).filter(e=>e.date!==t.startedAt);return r[r.length-1]}function cn(e,t,n){let r=m(n.exercise,t.prescription);return ht(sn(e,t,n.exercise.id),r,n.exercise.weightKind??`load`,{holdWeight:t.recoveryLevel===`easy`})}function ln(e,t){let n=m(t.exercise,e.prescription);return`${n.min}–${n.max} ${n.unit}`}function $(e){return`Exercise ${e.index+1} of ${e.exercises.length} · ${N(e.day)}`}function un(e,t=!1){return`
    <div class="session-controls">
      <button type="button" class="link-button" data-action="toggle-voice" aria-pressed="${e}">Voice: ${e?`on`:`off`}</button>
      ${t?`<button type="button" class="link-button" data-action="skip-exercise">Skip exercise</button>`:``}
      <button type="button" class="link-button" data-action="end-workout">End workout</button>
    </div>
  `}function dn(e,t,n,r,i){let a=X(e);if(!a)return``;let o=sn(t,e,a.exercise.id),s=m(a.exercise,e.prescription),c=cn(t,e,a),l=Q(t,e,a.exercise.id);return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>${a.exercise.name}</h1>
    </header>

    ${r?`<p class="notice" role="status">${r}</p>`:``}
    ${e.recoveryLevel===`easy`?`<p class="notice">Easy day: fewer sets, and your weights stay where they were.</p>`:``}

    <section class="card set-card">
      <p class="set-label">Set ${e.setNumber} of ${e.prescription.sets}</p>
      <p class="set-target">${ln(e,a)}</p>
      ${o?`<p class="last-time">Last time: ${J(o,s.unit)}</p>`:``}
      ${e.setNumber===1?`<p class="suggestion">${c.message}</p>`:``}
      ${l.length>0?`<p class="last-time">Today so far: ${J({date:``,sets:l},s.unit)}</p>`:``}
    </section>

    ${oe(a)}

    <button type="button" class="primary big" data-action="set-done">Set done</button>

    <details class="card how-to">
      <summary>How to do it</summary>
      ${se(a)}
    </details>

    <div class="button-row">
      <button type="button" class="secondary" data-action="open-swap">Swap</button>
      <button type="button" class="secondary" data-action="hurt">This hurt</button>
    </div>
    ${st(e.day,i)}
    ${un(n,!0)}
  `}function fn(e,t){let n=e.exercises.reduce((n,r)=>n+Q(t,e,r.exercise.id).length,0),r=n>0?`You've logged ${n} ${n===1?`set`:`sets`}. They're saved, and this workout will show as done on your calendar.`:`You haven't logged any sets yet, so nothing will be saved.`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>End this workout?</h1>
      <p class="lead">${r}</p>
    </header>

    <button type="button" class="primary big" data-action="confirm-end">Yes, end workout</button>
    <button type="button" class="secondary" data-action="cancel-end">Keep going</button>
  `}function pn(e,t){let n=X(e);if(!n)return``;let r=t.length===0?`<section class="card empty"><p>There's no other exercise for this spot with your gym's equipment. You can skip it instead.</p></section>`:t.map((e,t)=>`
        <button type="button" class="swap-option" data-action="choose-swap" data-index="${t}">
          <strong>${e.exercise.name}</strong>
          <small>${e.exercise.muscles}</small>
          ${e.cautionAreas.length>0?`<small class="swap-caution">Go easy: has a caution for you</small>`:``}
        </button>`).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Swap ${n.exercise.name}</h1>
      <p class="lead">Pick another exercise that works the same muscles. ${n.exercise.name} stays in future workouts.</p>
    </header>

    <div class="swap-list">${r}</div>

    <button type="button" class="secondary" data-action="cancel-swap">Keep ${n.exercise.name}</button>
  `}function mn(e,t,n){let r=X(e);if(!r)return``;let i=r.exercise.weightKind??`load`,a=m(r.exercise,e.prescription),o=r.exercise.equipment.includes(`dumbbells`),s=i===`assist`?`Help from the machine (lb)`:o?`Weight (lb, per dumbbell)`:`Weight (lb)`,c=(e,t,n,r)=>`
    <label class="stepper-label" for="log-${e}">${t}</label>
    <div class="stepper">
      <button type="button" class="step-button" data-step="${e}" data-delta="${-r}" aria-label="Less">−</button>
      <input id="log-${e}" type="number" inputmode="decimal" min="0" value="${n}" data-field="${e}" />
      <button type="button" class="step-button" data-step="${e}" data-delta="${r}" aria-label="More">+</button>
    </div>
  `;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Set ${e.setNumber} done</h1>
      <p class="lead">${r.exercise.name}: what did you do?</p>
    </header>

    <section class="card">
      ${i===`bodyweight`?``:c(`weight`,s,t.weight,5)}
      ${c(`amount`,a.unit===`seconds`?`Seconds held`:`Reps`,t.amount,1)}
      ${n?`<p class="form-error" role="alert">${n}</p>`:``}
    </section>

    <button type="button" class="primary big" data-action="save-set">Save set</button>
  `}function hn(e,t,n,r){let i=X(e);if(!i)return``;let a=e.setNumber===1?`Next exercise: <strong>${i.exercise.name}</strong>`:`Next: set ${e.setNumber} of ${e.prescription.sets}, ${i.exercise.name}`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Rest</h1>
    </header>

    <section class="card rest-card">
      <p class="timer" data-timer aria-live="off">${ce(nn(e,t))}</p>
      <p>${a}</p>
      <p class="hint">You'll hear when rest is over. Sharing a machine? No rush: the next set waits until you tap Set done.</p>
    </section>

    <div class="button-row">
      <button type="button" class="secondary" data-action="add-rest">+30 seconds</button>
      <button type="button" class="secondary" data-action="skip-rest">Skip rest</button>
    </div>
    ${st(e.day,r)}
    ${un(n)}
  `}function gn(e,t,n){return`
    <header class="screen-header">
      <p class="eyebrow">Workout done</p>
      <h1>Nice work!</h1>
      <p class="lead">Your sets are saved, so next time you'll see what you did today.</p>
    </header>

    <section class="card">
      <h2>Today</h2>
      <ul class="summary">${e.exercises.map(n=>{let r=Q(t,e,n.exercise.id),i=m(n.exercise,e.prescription).unit,a=r.length>0?J({date:``,sets:r},i):`skipped`;return`<li><strong>${n.exercise.name}</strong><br /><span class="hint">${a}</span></li>`}).join(``)}</ul>
    </section>

    <section class="card">
      <h2>Cool down</h2>
      <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
      ${F(n,`warm-up`)}
    </section>

    <button type="button" class="primary" data-action="close-session">Back to workouts</button>
  `}function _n(e,t){let n=m(t.exercise,e.prescription);return`${n.min} to ${n.max} ${n.unit}`}function vn(e,t){let n=X(e);if(!n)return``;let r=[e.setNumber===1?`${n.exercise.name}.`:``,`Set ${e.setNumber} of ${e.prescription.sets}.`,`${_n(e,n)}.`],i=cn(t,e,n);return e.setNumber===1&&i.weight!==null&&r.push(`Try ${i.weight} pounds.`),r.filter(Boolean).join(` `)}function yn(e){return`Rest ${e.prescription.restSeconds} seconds.`}function bn(e){let t=X(e);return t?e.setNumber===1?`10 seconds. Next up, ${t.exercise.name}.`:`10 seconds. Get ready for set ${e.setNumber}.`:``}var xn=10,Sn=30,Cn=`If the pain was sharp or keeps coming back, stop and get it checked.`;function wn(e){let t=on(),n=t.profile?t.equipmentConfirmed?`today`:`equipment`:`profile`,i=a(new Date),o=null,s=t.profile?{...t.profile}:{...q},c,l={name:``,grams:``,goal:``,error:``},u={...Wt},d=!0,f={weight:``,amount:``},p=``,h,g=!1,_=``,v=null,y=!1,b=at(T,S);function x(e){S(Z(t)?e:`Couldn't save on this device — changes last until you close the page.`)}function S(t){let n=e.querySelector(`.toast`);n&&(n.textContent=t,n.classList.add(`visible`),window.clearTimeout(c),c=window.setTimeout(()=>n.classList.remove(`visible`),2500))}function C(e){d&&e&&ke(e,{onStart:b.duck,onEnd:b.restore})}function w(e){n=e,e===`profile`&&(s=t.profile?{...t.profile}:{...q}),T(),window.scrollTo(0,0)}function T(){let n=t.profile!==null&&t.equipmentConfirmed,r=t.session!==null;document.body.classList.toggle(`has-nav`,n&&!r),e.innerHTML=`
      <main class="screen">${r?be():E()}</main>
      ${n&&!r?z():``}
      <div class="toast" role="status" aria-live="polite"></div>
    `}function E(){if(n===`profile`)return te();if(n===`equipment`)return j();if(n===`progress`){let e=(t.profile??q).weekPlan.filter(Boolean).length;return Ut(t.history,new Date,e,t.recovery)}return n===`fuel`?qe(t.nutrition,a(new Date),l):fe()}function O(e,t,n,r,i=``){return`<button type="button" class="chip${r?` active`:``}" data-group="${e}" data-value="${t}" aria-pressed="${r}">
      <span>${n}</span>${i?`<small>${i}</small>`:``}
    </button>`}function te(){let e=t.profile===null;return`
      <header class="screen-header">
        <h1>${e?`Let's set up your workouts`:`Your profile`}</h1>
        <p class="lead">This shapes which exercises you get and how many sets and reps. It stays on this phone.</p>
      </header>

      <section class="card">
        <h2>Your goal</h2>
        <div class="chip-col">
          ${ct.map(e=>O(`goal`,e.id,e.label,s.goal===e.id,e.detail)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Lifting experience</h2>
        <div class="chip-row">
          ${lt.map(e=>O(`experience`,e.id,e.label,s.experience===e.id)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Your week</h2>
        <p class="hint">Pick a workout for each day, or Rest. Legs days include abs. You can change this any time.</p>
        ${De(s.weekPlan)}
      </section>

      ${t.profile?ye(t.calendar,ne(t.profile)):``}

      <section class="card">
        <h2>Areas to protect</h2>
        <p class="hint">Tick anything that's injured, painful, or tight. Risky exercises for these areas are left out, and gentler ones are picked instead.</p>
        <div class="chip-row">
          ${ut.map(e=>O(`area`,e.id,e.label,s.protectedAreas.includes(e.id))).join(``)}
        </div>
        <p class="disclaimer">This app isn't medical advice. If something hurts beyond normal muscle tiredness, stop, and check with a doctor or physical therapist about what's safe for you.</p>
      </section>

      ${k()}

      <button type="button" class="primary" data-action="save-profile">${e?`Next: your gym's equipment`:`Save profile`}</button>
      ${e?``:`<button type="button" class="secondary" data-nav="equipment">Edit gym equipment</button>`}
    `}function ne(e){return JSON.stringify(s.weekPlan)!==JSON.stringify(e.weekPlan)}function k(){let e=t.profile?.avoidedExerciseIds??[];return e.length===0?``:`
      <section class="card">
        <h2>Exercises that hurt</h2>
        <p class="hint">You marked these as hurting, so they're left out of your workouts.</p>
        <ul class="avoided-list">${e.filter(e=>r[e]).map(e=>`
        <li class="avoided-item">
          <span>${r[e].name}</span>
          <button type="button" class="link-button" data-action="unavoid" data-exercise="${e}">Bring back</button>
        </li>`).join(``)}</ul>
      </section>
    `}function A(e,n){if(!t.profile)return;let r=t.profile.avoidedExerciseIds.filter(t=>t!==e);t.profile={...t.profile,avoidedExerciseIds:n?[...r,e]:r},s={...s,avoidedExerciseIds:t.profile.avoidedExerciseIds}}function j(){let e=!t.equipmentConfirmed,n=new Set(t.equipmentIds);return`
      <header class="screen-header">
        <h1>What does your gym have?</h1>
        <p class="lead">Untick anything your gym doesn't have. You'll only get exercises you can actually do there.</p>
      </header>

      <section class="card equipment-list">
        ${Oe.map(e=>`
          <label class="equipment-item">
            <input type="checkbox" data-equipment="${e.id}" ${n.has(e.id)?`checked`:``} />
            <span><strong>${e.name}</strong><small>${e.hint}</small></span>
          </label>`).join(``)}
      </section>

      <button type="button" class="primary" data-action="save-equipment">${e?`See today's workout`:`Save equipment`}</button>
    `}function M(e,n,r){let{exercise:i}=e,a=mt(t.history,i.id);return`
      <article class="exercise">
        <details>
          <summary>
            <span class="exercise-number">${n+1}</span>
            <span class="exercise-title">
              <strong>${i.name}</strong>
              <small>${i.muscles}</small>
              ${a?`<small class="last-time">Last time: ${J(a,r)}</small>`:``}
            </span>
            <span class="chevron" aria-hidden="true"></span>
          </summary>
          ${oe(e)}
          ${se(e)}
          <button type="button" class="link-button hurt-link" data-action="avoid" data-exercise="${i.id}">This hurts me, replace it</button>
        </details>
      </article>
    `}function N(e){return re(e,t.profile??q,t.equipmentIds)}function P(){let e=xe(new Date,(t.profile??q).weekPlan,t.workoutLog),n=e.find(e=>e.key===i)??e.find(e=>e.isToday)??e[0];return{week:e,selected:n,shown:(n.isToday&&n.status!==`done`?o:null)??n.workout}}function I(e){t.workoutLog=[...t.workoutLog,{date:new Date().toISOString(),day:e}],o=null}function le(e){return`
      <details class="card switcher">
        <summary>Switch today's workout</summary>
        <p class="hint">Want a different one today? Pick it here. Your week plan stays as it is.</p>
        ${ae(e,`Workout for today`)}
      </details>`}function L(){return Mt(t.recovery,a(new Date))}function ue(e){return e?Kt(L(),u):``}function fe(){let{week:e,selected:t,shown:n}=P(),r=we(e,t.key);if(n===null)return`
        <header class="screen-header">
          <p class="eyebrow">${Se(t)}</p>
          <h1>Rest day</h1>
        </header>
        ${r}
        ${ue(t.isToday)}
        ${Ee(t)}
      `;let i=N(n),a=t.status===`done`,o=t.status===`missed`,s=t.isToday&&!a,c=e.some(e=>e.isToday&&e.status!==`done`),l=i.exercises.length>0,u=l?i.exercises.map((e,t)=>M(e,t,m(e.exercise,i.prescription).unit)).join(``):`<section class="card empty">
           <p>None of your gym's equipment fits this day yet.</p>
           <button type="button" class="secondary" data-action="go-equipment">Check your equipment</button>
         </section>`,d=l?a?`<p class="notice done-note">✓ Done. Your sets from this workout are in the Progress tab.</p>`:s?`<button type="button" class="primary big" data-action="start-workout">Start workout</button>
             <p class="hint start-hint">Talks you through each set with a rest timer. Headphones recommended.</p>`:o?`<p class="notice">○ This one wasn't logged. It was planned for ${V[t.weekdayIndex]}.</p>
               ${c?`<button type="button" class="secondary" data-action="do-today" data-workout="${n}">Do it today instead</button>`:``}`:`<p class="hint start-hint">Coming up. You can start it on the day.</p>`:``;return`
      <header class="screen-header">
        <p class="eyebrow">${t.isToday?`Today's workout`:Se(t)}</p>
        <h1>${ie(n,i.title)}</h1>
      </header>

      ${r}

      ${ue(t.isToday)}

      ${d}
      ${s?le(n):``}

      ${ot(n,b.current())}

      <section class="card">
        <h2>Warm up first</h2>
        ${F(i.warmUp,`warm-up`)}
      </section>

      <section class="card prescription">
        <h2>For every exercise</h2>
        <p>${ee(i.prescription)}</p>
      </section>

      <p class="tap-hint">Tap an exercise to see how to do it.</p>
      <div class="exercise-list">${u}</div>

      <section class="card">
        <h2>Cool down</h2>
        <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
        ${F(i.coolDown,`warm-up`)}
      </section>

      ${l&&s?`<button type="button" class="secondary" data-action="finish-workout">Mark done without workout mode</button>`:``}
    `}function z(){let e=(e,t)=>`<button type="button" class="nav-item${n===e||e===`profile`&&n===`equipment`?` active`:``}" data-nav="${e}">${t}</button>`;return`<nav class="bottom-nav" aria-label="Main">${e(`today`,`Workout`)}${e(`progress`,`Progress`)}${e(`fuel`,`Fuel`)}${e(`profile`,`Profile`)}</nav>`}function pe(){let t=e.querySelector(`input[data-field="checkin-hours"]`),n=e.querySelector(`input[data-field="checkin-readiness"]`);t&&(u.hours=t.value),n&&(u.readiness=n.value)}function me(e,n){if(pe(),e===`checkin-open`){let e=L();u={open:!0,feel:e?.feel??null,hours:e?.hours===null||e===void 0?``:String(e.hours),readiness:e?.readiness===null||e===void 0?``:String(e.readiness),error:``}}else if(e===`checkin-feel`)u={...u,feel:Number(n),error:``};else if(e===`checkin-cancel`)u={...Wt};else if(e===`checkin-save`){let e=Pt(u.feel,u.hours,u.readiness);if(!e.ok)u={...u,error:e.error};else{t.recovery=Nt(t.recovery,{date:a(new Date),feel:e.feel,hours:e.hours,readiness:e.readiness}),u={...Wt},Z(t),T(),S(`Check-in saved.`);return}}T()}function he(){let n=e.querySelector(`input[data-field="cal-time"]`)?.value??``;if(!de(n)){S(`Pick a start time first.`);return}let r=Number(e.querySelector(`select[data-field="cal-minutes"]`)?.value),i=R.includes(r)?r:t.calendar.minutes;t.calendar={time:n,minutes:i},Z(t);let a=(t.profile??q).weekPlan;Ae(`gym-guide-week.ics`,`text/calendar;charset=utf-8`,ve(a,t.calendar,new Date)),S(`Calendar file downloaded. Open it to add your workouts.`)}function B(t){return e.querySelector(`input[data-field="${t}"]`)?.value??``}function ge(){l={name:B(`protein-name`),grams:B(`protein-grams`),goal:B(`protein-goal`),error:``}}function _e(e,n,r){ge();let i=a(new Date),o=t.nutrition;if(e===`water`)t.nutrition=Re(o,i,Number(n));else if(e===`water-goal`)t.nutrition={...o,waterGoal:Math.min(20,Math.max(1,o.waterGoal+Number(n)))};else if(e===`quick-protein`){let e=Ie[Number(r)];e&&(t.nutrition=ze(o,i,e))}else if(e===`add-protein`){let e=He(l.name,l.grams);e?l.error=e:(t.nutrition=ze(o,i,{name:l.name.trim(),grams:Number(l.grams)}),l={...l,name:``,grams:``})}else if(e===`remove-protein`)t.nutrition=Be(o,i,Number(r));else if(e===`set-protein-goal`){let e=Number(l.goal);!Number.isInteger(e)||e<1||e>400?l.error=`Enter a protein goal in whole grams, between 1 and 400.`:t.nutrition={...o,proteinGoal:e}}else e===`clear-protein-goal`&&(l.goal=String(o.proteinGoal??``),t.nutrition={...o,proteinGoal:null});Z(t)||(l.error=`Couldn't save on this device.`),T()}function be(){let e=t.session;if(!e)return``;if(y)return fn(e,t.history);switch(e.phase){case`lift`:return v?pn(e,v):dn(e,t.history,d,_,b.current());case`log`:return mn(e,f,p);case`rest`:return hn(e,Date.now(),d,b.current());case`done`:return gn(e,t.history,N(e.day).coolDown)}}function H(){let e=t.session,n=e&&X(e);if(!e||!n)return;let r=Q(t.history,e,n.exercise.id),i=r[r.length-1],a=cn(t.history,e,n),o=m(n.exercise,e.prescription),s=i?.weight??a.weight;f={weight:s==null?``:String(s),amount:String(i?.amount??o.max)},p=``}function Ce(t){return e.querySelector(`input[data-field="${t}"]`)?.value.trim()??``}function Te(){let e=t.session,n=e&&X(e);if(!e||!n)return;let r=(n.exercise.weightKind??`load`)===`bodyweight`;f={weight:Ce(`weight`),amount:Ce(`amount`)};let i=Number(f.amount);if(!Number.isInteger(i)||i<1||i>300){p=`Enter how many reps (or seconds) you did, as a whole number.`,T();return}let a=null;if(!r&&(a=Number(f.weight),f.weight===``||!Number.isFinite(a)||a<0||a>1e3)){p=`Enter the weight in pounds. Use 0 if there was no added weight.`,T();return}t.history=gt(t.history,n.exercise.id,e.startedAt,{weight:a,amount:i}),t.session=Zt(e,Date.now()),Z(t),U()}function U(e=!0){window.clearInterval(h);let n=t.session;n&&(n.phase===`rest`?(g=nn(n,Date.now())<=xn,C(yn(n)),h=window.setInterval(W,250)):n.phase===`lift`?e&&C(vn(n,t.history)):n.phase===`done`&&(Pe(!1),I(n.day),Z(t),C(`Workout complete. Nice work!`),je([200,100,200])),T(),window.scrollTo(0,0))}function W(){let n=t.session;if(!n||n.phase!==`rest`){window.clearInterval(h);return}let r=nn(n,Date.now()),i=e.querySelector(`[data-timer]`);i&&(i.textContent=ce(r)),!g&&r<=xn&&r>0&&(g=!0,C(bn(n))),r===0&&(je([300]),t.session=Qt(n),Z(t),C(`Go.`),window.setTimeout(()=>U(),d?900:0),window.clearInterval(h))}function G(){window.clearInterval(h),v=null,y=!1,Pe(!1),t.session=null,i=a(new Date),o=null,Z(t),w(`today`)}function Me(){let e=t.session,n=e&&X(e);if(!e||!n||!t.profile)return;A(n.exercise.id,!0);let r=e.exercises.map(e=>e.exercise.id),[i]=D(n,t.profile,t.equipmentIds,r);i?(t.session=tn(e,i),_=`Switched from ${n.exercise.name} to ${i.exercise.name}, which works the same muscles. ${Cn}`,C(`Switched to ${i.exercise.name}.`)):(t.session=en(e),_=`Skipped ${n.exercise.name}. There's no gentler option for it with your equipment. ${Cn}`),Z(t),U(!i)}function Ne(n,r){let i=t.session;if(i){if(n!==`hurt`&&n!==`toggle-voice`&&(_=``),n===`open-swap`){let e=X(i);if(!e||!t.profile)return;let n=i.exercises.map(e=>e.exercise.id);v=D(e,t.profile,t.equipmentIds,n),T(),window.scrollTo(0,0)}else if(n===`choose-swap`){let e=v?.[Number(r)];if(v=null,!e)return;t.session=tn(i,e),Z(t),U()}else n===`cancel-swap`?(v=null,T()):n===`hurt`?Me():n===`set-done`?(t.session=Xt(i),H(),T(),e.querySelector(`input[data-field="amount"]`)?.select()):n===`save-set`?Te():n===`add-rest`?(t.session=$t(i,Sn,Date.now()),g=!1,Z(t),W()):n===`skip-rest`?(t.session=Qt(i),Z(t),U()):n===`skip-exercise`?(t.session=en(i),Z(t),U()):n===`play-music`?b.play(i.day):n===`toggle-voice`?(d=!d,d||window.speechSynthesis?.cancel(),T()):n===`end-workout`?(y=!0,T(),window.scrollTo(0,0)):n===`cancel-end`?(y=!1,T()):n===`confirm-end`?(i.exercises.some(e=>Q(t.history,i,e.exercise.id).length>0)&&I(i.day),G()):n===`close-session`&&G()}}e.addEventListener(`change`,e=>{let n=e.target;n.dataset.field===`cal-time`&&de(n.value)?(t.calendar={...t.calendar,time:n.value},Z(t)):n.dataset.field===`cal-minutes`&&R.includes(Number(n.value))&&(t.calendar={...t.calendar,minutes:Number(n.value)},Z(t))}),e.addEventListener(`click`,c=>{let l=c.target.closest(`[data-point]`);if(l){let e=l.closest(`.progress-card`)?.querySelector(`.chart-caption`);e&&(e.textContent=l.dataset.point??``);return}let u=c.target.closest(`button`);if(!u)return;let{group:d,value:f,action:p,day:ee,date:m,nav:h,step:g,delta:_,exercise:v,index:y,planDay:C,planWorkout:E,workout:D}=u.dataset;if(g&&_){let t=e.querySelector(`input[data-field="${g}"]`);t&&(t.value=String(Math.max(0,(Number(t.value)||0)+Number(_))));return}if(C!==void 0&&E){let e=Number(C),t=E===`rest`?null:E,n=s.weekPlan.map((n,r)=>r===e?t:n);if(!n.some(Boolean)){S(`Keep at least one workout day.`);return}s.weekPlan=n,T();return}if(d&&f){if(d===`goal`&&(s.goal=f),d===`experience`&&(s.experience=f),d===`area`){let e=f,t=s.protectedAreas;s.protectedAreas=t.includes(e)?t.filter(t=>t!==e):[...t,e]}T();return}if(m){i=m,o=null,T();return}if(ee){o=ee,T();return}if(h){w(h);return}if(p){if(t.session){Ne(p,y);return}if(n===`fuel`){_e(p,_,y);return}if(p.startsWith(`checkin-`)){me(p,f);return}if(p===`save-profile`){let e=t.profile===null;t.profile={...s},e?(Z(t),w(`equipment`)):(w(`today`),x(`Profile saved — your workouts are updated.`))}else if(p===`save-equipment`)t.equipmentIds=[...e.querySelectorAll(`input[data-equipment]`)].filter(e=>e.checked).map(e=>e.dataset.equipment??``),t.equipmentConfirmed=!0,w(`today`),x(`Equipment saved.`);else if(p===`avoid`&&v)A(v,!0),T(),x(`${r[v]?.name??`That exercise`} won't be planned again. Bring it back any time in Profile.`);else if(p===`unavoid`&&v)A(v,!1),T(),x(`${r[v]?.name??`That exercise`} is back in your workouts.`);else if(p===`go-equipment`)w(`equipment`);else if(p===`add-to-calendar`)he();else if(p===`play-music`&&D)b.play(D);else if(p===`do-today`&&D)i=a(new Date),o=D,T(),window.scrollTo(0,0);else if(p===`start-workout`){let{shown:e}=P();if(!e)return;let n=L();t.session=qt(N(e),new Date,n?Ot(n):null),Z(t),Pe(!0),U()}else if(p===`finish-workout`){let{shown:e}=P();if(!e)return;I(e),w(`today`),x(`Nice work! It's marked done on your calendar.`)}}}),t.session&&(t.session.phase===`rest`&&nn(t.session,Date.now())===0&&(t.session=Qt(t.session)),t.session.phase===`log`&&H(),Pe(t.session.phase!==`done`),t.session.phase===`rest`&&(h=window.setInterval(W,250))),T()}var Tn=document.querySelector(`#app`);Tn&&wn(Tn),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});